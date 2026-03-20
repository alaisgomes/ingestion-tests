interface CustomerProfile {
  firstName: string;
  lastName: string;
  company: string;
  lastPurchaseDate: Date;
  preferredLanguage: string;
}

interface EmailTemplate {
  id: string;
  subject: string;
  body: string;
  placeholders: string[];
}

export class EmailTemplatePersonalizationEngineService {
  private templates: Map<string, EmailTemplate> = new Map();

  registerTemplate(template: EmailTemplate): void {
    this.templates.set(template.id, template);
  }

  personalizeTemplate(templateId: string, customer: CustomerProfile): { subject: string; body: string } | null {
    const template = this.templates.get(templateId);
    if (!template) return null;

    const replacements: Record<string, string> = {
      "{{firstName}}": customer.firstName,
      "{{lastName}}": customer.lastName,
      "{{company}}": customer.company,
      "{{lastPurchaseDate}}": customer.lastPurchaseDate.toISOString(),
      "{{preferredLanguage}}": customer.preferredLanguage,
    };

    let subject = template.subject;
    let body = template.body;

    for (const [placeholder, value] of Object.entries(replacements)) {
      subject = subject.replaceAll(placeholder, value);
      body = body.replaceAll(placeholder, value);
    }

    return { subject, body };
  }
}
