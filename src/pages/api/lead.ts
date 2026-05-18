import type { APIRoute } from "astro";

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  try {
    const data = await request.formData();

    // Honeypot check
    if (data.get("website")) {
      return new Response(JSON.stringify({ ok: true }), { status: 200 });
    }

    const required = ["name", "phone", "email", "service"];
    for (const field of required) {
      if (!data.get(field)) {
        return new Response(JSON.stringify({ error: `Missing field: ${field}` }), {
          status: 400,
          headers: { "Content-Type": "application/json" },
        });
      }
    }

    const lead = {
      name: data.get("name") as string,
      phone: data.get("phone") as string,
      email: data.get("email") as string,
      company: (data.get("company") as string) || "—",
      service: data.get("service") as string,
      message: (data.get("message") as string) || "—",
      source: (data.get("source") as string) || "direct",
      medium: (data.get("medium") as string) || "—",
      campaign: (data.get("campaign") as string) || "—",
      gclid: (data.get("gclid") as string) || "—",
      pageUrl: (data.get("pageUrl") as string) || "—",
      referrer: (data.get("referrer") as string) || "—",
      timestamp: (data.get("timestamp") as string) || new Date().toISOString(),
    };

    const smtpHost = import.meta.env.SMTP_HOST;
    const smtpUser = import.meta.env.SMTP_USER;
    const smtpPass = import.meta.env.SMTP_PASS;
    const toEmail = import.meta.env.LEAD_EMAIL || "sales@cognexa.in";

    if (smtpHost && smtpUser && smtpPass) {
      const { default: nodemailer } = await import("nodemailer");
      const transporter = nodemailer.createTransport({
        host: smtpHost,
        port: Number(import.meta.env.SMTP_PORT || 587),
        secure: import.meta.env.SMTP_SECURE === "true",
        auth: { user: smtpUser, pass: smtpPass },
      });

      await transporter.sendMail({
        from: `"CogNexa Website" <${smtpUser}>`,
        to: toEmail,
        replyTo: lead.email,
        subject: `New Lead: ${lead.service} — ${lead.name}`,
        text: `
New lead from cognexa.in

Name: ${lead.name}
Phone: ${lead.phone}
Email: ${lead.email}
Company: ${lead.company}
Service: ${lead.service}
Message: ${lead.message}

--- Tracking ---
Source: ${lead.source}
Medium: ${lead.medium}
Campaign: ${lead.campaign}
GCLID: ${lead.gclid}
Page URL: ${lead.pageUrl}
Referrer: ${lead.referrer}
Timestamp: ${lead.timestamp}
        `.trim(),
        html: `
<h2 style="color:#0f172a">New Lead — CogNexa</h2>
<table cellpadding="6" style="border-collapse:collapse;font-family:sans-serif;font-size:14px">
  <tr><td style="font-weight:bold;color:#475569">Name</td><td>${lead.name}</td></tr>
  <tr style="background:#f8fafc"><td style="font-weight:bold;color:#475569">Phone</td><td>${lead.phone}</td></tr>
  <tr><td style="font-weight:bold;color:#475569">Email</td><td>${lead.email}</td></tr>
  <tr style="background:#f8fafc"><td style="font-weight:bold;color:#475569">Company</td><td>${lead.company}</td></tr>
  <tr><td style="font-weight:bold;color:#475569">Service</td><td><strong>${lead.service}</strong></td></tr>
  <tr style="background:#f8fafc"><td style="font-weight:bold;color:#475569">Message</td><td>${lead.message}</td></tr>
</table>
<h3 style="color:#64748b;font-size:12px;margin-top:16px">Tracking</h3>
<table cellpadding="4" style="font-size:12px;color:#94a3b8">
  <tr><td>Source</td><td>${lead.source}</td></tr>
  <tr><td>Medium</td><td>${lead.medium}</td></tr>
  <tr><td>Campaign</td><td>${lead.campaign}</td></tr>
  <tr><td>GCLID</td><td>${lead.gclid}</td></tr>
  <tr><td>Page</td><td>${lead.pageUrl}</td></tr>
  <tr><td>Referrer</td><td>${lead.referrer}</td></tr>
  <tr><td>Time</td><td>${lead.timestamp}</td></tr>
</table>
        `.trim(),
      });
    } else {
      // Log to console if SMTP not configured (dev mode)
      console.log("[Lead]", JSON.stringify(lead, null, 2));
    }

    return new Response(JSON.stringify({ ok: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error("[Lead API Error]", err);
    return new Response(JSON.stringify({ error: "Internal server error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
};
