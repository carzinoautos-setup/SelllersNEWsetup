import { useState } from "react";
import { DashboardLayout } from "@/components/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle, Search, ArrowRight, CheckCircle2 } from "lucide-react";

const buyingFaqs = [
  {
    question: "How do I know what's a good selling price?",
    answer:
      "We provide market analysis tools and comparable listings to help you understand fair market pricing. You can view similar vehicles in your area to benchmark prices.",
  },
  {
    question: "How do I find the specs of my car?",
    answer:
      "You can find detailed specifications using our VIN decoder tool or by checking the vehicle documentation. Our platform also displays comprehensive specs for all listed vehicles.",
  },
  {
    question: "How can I find the VIN on my vehicle?",
    answer:
      "The VIN is typically located on the driver's side dashboard (visible through the windshield), on the driver's side door jamb, or in the vehicle's registration documents.",
  },
  {
    question: "How can I contact a seller?",
    answer:
      "Once you find a vehicle you're interested in, you can contact the seller directly through our messaging system. Sellers typically respond within 24 hours.",
  },
  {
    question: "What should I check before buying?",
    answer:
      "We recommend checking the vehicle's history report, inspecting the condition, testing the features, and reviewing maintenance records. Our platform provides easy access to all this information.",
  },
  {
    question: "Is there financing available?",
    answer:
      "Yes, we work with multiple lenders to provide financing options. You can explore available loans and pre-approval options through our partnerships.",
  },
];

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <div className="w-full max-w-2xl">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <div className="space-y-2">
            <label htmlFor="firstName" className="block text-sm font-medium">
              First Name
            </label>
            <Input
              id="firstName"
              name="firstName"
              placeholder="John"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="lastName" className="block text-sm font-medium">
              Last Name
            </label>
            <Input
              id="lastName"
              name="lastName"
              placeholder="Doe"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="space-y-2">
          <label htmlFor="email" className="block text-sm font-medium">
            Email
          </label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="john@example.com"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="subject" className="block text-sm font-medium">
            Subject
          </label>
          <select
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
            required
          >
            <option value="">Select a subject</option>
            <option value="buying">Question about buying</option>
            <option value="technical">Technical support</option>
            <option value="account">Account help</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div className="space-y-2">
          <label htmlFor="message" className="block text-sm font-medium">
            Message
          </label>
          <Textarea
            id="message"
            name="message"
            placeholder="Tell us more about your question..."
            value={formData.message}
            onChange={handleChange}
            className="min-h-[120px]"
            required
          />
        </div>

        <Button type="submit" className="bg-main-color hover:bg-main-color/90 w-full sm:w-auto">
          Send Message
        </Button>
      </form>
    </div>
  );
};

const FAQ = () => {
  return (
    <DashboardLayout>
      <div className="flex flex-col min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-muted/50 to-muted/30 px-4 py-12 sm:py-16 lg:py-20">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-muted/50 px-4 py-2">
              <HelpCircle className="h-4 w-4 text-main-color" />
              <span className="text-sm font-medium text-main-color">Help Center</span>
            </div>
            <h1 className="mb-4 text-4xl font-bold tracking-tight text-heading sm:text-5xl">
              How can we help?
            </h1>
            <p className="text-lg text-muted-foreground">
              Find answers to common questions about buying vehicles on Carzino
            </p>
          </div>
        </section>

        {/* Main Content */}
        <section className="flex-1 px-4 py-12 sm:py-16">
          <div className="mx-auto max-w-4xl space-y-12">
            {/* Search Bar */}
            <div className="relative">
              <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search FAQs..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-12 py-6 text-base"
              />
            </div>

            {/* Quick Stats / Features */}
            <div className="grid gap-4 md:grid-cols-3">
              <Card className="border-0 shadow-sm bg-gradient-to-br from-muted/40 to-transparent">
                <CardContent className="pt-6 flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-main-color flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-heading">Expert Guidance</p>
                    <p className="text-sm text-muted-foreground">Find reliable answers from our team</p>
                  </div>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-sm bg-gradient-to-br from-muted/40 to-transparent">
                <CardContent className="pt-6 flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-main-color flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-heading">Quick Answers</p>
                    <p className="text-sm text-muted-foreground">Get help instantly with our FAQs</p>
                  </div>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-sm bg-gradient-to-br from-muted/40 to-transparent">
                <CardContent className="pt-6 flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-main-color flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-heading">24/7 Support</p>
                    <p className="text-sm text-muted-foreground">Reach out anytime with your questions</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* FAQ Accordion */}
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-heading mb-2">Frequently Asked Questions</h2>
                <p className="text-muted-foreground">
                  {filteredFaqs.length} question{filteredFaqs.length !== 1 ? "s" : ""} found
                </p>
              </div>

              {filteredFaqs.length > 0 ? (
                <Accordion type="single" collapsible className="w-full space-y-3">
                  {filteredFaqs.map((faq, index) => (
                    <AccordionItem
                      key={index}
                      value={`item-${index}`}
                      className="border rounded-lg px-4 bg-card hover:bg-card/80 transition-colors"
                    >
                      <AccordionTrigger className="py-4 text-left font-medium hover:text-main-color transition-colors">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="pb-4 text-muted-foreground">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              ) : (
                <div className="text-center py-12">
                  <p className="text-muted-foreground mb-4">No questions match your search.</p>
                  <Button
                    variant="outline"
                    onClick={() => setSearchTerm("")}
                    className="mx-auto"
                  >
                    Clear search
                  </Button>
                </div>
              )}
            </div>

            {/* CTA Section */}
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-muted/40 to-muted/20 px-6 py-12 sm:px-8 sm:py-16 border border-muted/40">
              <div className="relative z-10 max-w-2xl">
                <h3 className="text-2xl font-bold text-heading mb-2">Still looking for answers?</h3>
                <p className="text-muted-foreground mb-6">
                  Didn't find what you need? Our support team is ready to help with any questions you might have.
                </p>
                <a href="#contact-form" className="inline-block">
                  <Button className="bg-main-color hover:bg-main-color/90 gap-2">
                    Get in Touch
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </a>
              </div>
              <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-muted/30 -mr-20 -mt-20" />
            </div>

            {/* Contact Section */}
            <div id="contact-form" className="space-y-8 rounded-lg border bg-card p-8 sm:p-12">
              <div className="max-w-2xl">
                <h2 className="mb-2 text-2xl font-bold text-heading">Contact our support team</h2>
                <p className="text-muted-foreground">
                  Have a specific question? Get in touch with us and we'll get back to you as soon as possible.
                </p>
              </div>
              <ContactForm />
            </div>
          </div>
        </section>
      </div>
    </DashboardLayout>
  );
};

export default FAQ;
