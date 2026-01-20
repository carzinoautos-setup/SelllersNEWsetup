import { useState } from "react";
import { DashboardLayout } from "@/components/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle, MessageSquare, Phone, Mail, ShoppingCart, FileText, Settings } from "lucide-react";

const faqCategories = [
  {
    id: "buying",
    title: "Buying a Vehicle",
    icon: ShoppingCart,
    description: "Answers for buyers using Carzino",
    faqs: [
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
    ],
  },
  {
    id: "selling",
    title: "Selling a Vehicle",
    icon: FileText,
    description: "Information for those looking to list or sell a car",
    faqs: [
      {
        question: "What information do I need to list my vehicle?",
        answer:
          "You'll need your vehicle's VIN, current mileage, condition details, photos, and pricing information. Our step-by-step listing wizard makes it easy.",
      },
      {
        question: "How do I price my vehicle competitively?",
        answer:
          "Use our pricing guides and view comparable listings in your area. We also provide market insights to help you set the right price.",
      },
      {
        question: "Can I edit my listing after posting?",
        answer:
          "Yes, you can edit your listing anytime. Simply go to 'My Listings' and make any necessary changes to pricing, details, or photos.",
      },
      {
        question: "How long will my listing stay active?",
        answer:
          "Standard listings remain active for 60 days. You can renew or feature your listing to increase visibility.",
      },
    ],
  },
  {
    id: "dealer",
    title: "Dealer Accounts",
    icon: Settings,
    description: "Guidance for dealers and their accounts",
    faqs: [
      {
        question: "What are the benefits of a dealer account?",
        answer:
          "Dealer accounts provide bulk listing tools, analytics dashboard, featured placement options, and dedicated support to help grow your business.",
      },
      {
        question: "How do I upgrade to a dealer account?",
        answer:
          "Contact our sales team or upgrade directly through your account settings. We'll help you choose the plan that fits your needs.",
      },
      {
        question: "Can I manage multiple dealerships?",
        answer:
          "Yes, dealer accounts can manage multiple locations and inventory across all properties with centralized reporting.",
      },
      {
        question: "What support do dealer accounts receive?",
        answer:
          "Dealer accounts get priority support, including dedicated account managers, training resources, and custom reporting features.",
      },
    ],
  },
];

const CategoryCard = ({
  icon: Icon,
  title,
  description,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
}) => (
  <Card className="group hover:shadow-md transition-shadow duration-200">
    <CardHeader>
      <div className="flex items-start gap-3">
        <div className="rounded-lg bg-main-color/10 p-2.5 text-main-color group-hover:bg-main-color group-hover:text-white transition-colors duration-200">
          <Icon className="h-5 w-5" />
        </div>
        <div className="flex-1">
          <CardTitle className="text-lg">{title}</CardTitle>
        </div>
      </div>
    </CardHeader>
    <CardContent>
      <CardDescription className="text-sm">{description}</CardDescription>
    </CardContent>
  </Card>
);

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
    // Reset form
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
            <option value="selling">Question about selling</option>
            <option value="dealer">Dealer account inquiry</option>
            <option value="technical">Technical support</option>
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
  const [expandedCategory, setExpandedCategory] = useState<string>("buying");

  return (
    <DashboardLayout>
      <div className="flex flex-col min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-main-color/5 to-main-color/10 px-4 py-12 sm:py-16 lg:py-20">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-main-color/10 px-4 py-2">
              <HelpCircle className="h-4 w-4 text-main-color" />
              <span className="text-sm font-medium text-main-color">Help Center</span>
            </div>
            <h1 className="mb-4 text-4xl font-bold tracking-tight text-heading sm:text-5xl">
              How can we help?
            </h1>
            <p className="text-lg text-muted-foreground">
              Answers for buyers, sellers, and dealers using Carzino
            </p>
          </div>
        </section>

        {/* Main Content */}
        <section className="flex-1 px-4 py-12 sm:py-16">
          <div className="mx-auto max-w-4xl space-y-16">
            {/* Accordion FAQs */}
            <div className="space-y-8">
              {faqCategories.map((category) => (
                <div key={category.id}>
                  <button
                    onClick={() =>
                      setExpandedCategory(
                        expandedCategory === category.id ? "" : category.id
                      )
                    }
                    className="mb-6 flex items-center gap-3 group"
                  >
                    <div className="rounded-lg bg-main-color/10 p-2.5 text-main-color group-hover:bg-main-color group-hover:text-white transition-colors duration-200">
                      <category.icon className="h-5 w-5" />
                    </div>
                    <h2 className="text-2xl font-bold text-heading">{category.title}</h2>
                  </button>

                  {expandedCategory === category.id && (
                    <Accordion type="single" collapsible className="w-full border-none space-y-0">
                      {category.faqs.map((faq, index) => (
                        <AccordionItem key={index} value={`item-${index}`} className="border-b last:border-b-0">
                          <AccordionTrigger className="py-4 text-left font-medium hover:text-main-color transition-colors">
                            {faq.question}
                          </AccordionTrigger>
                          <AccordionContent className="pb-6 text-muted-foreground">
                            {faq.answer}
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  )}
                </div>
              ))}
            </div>

            {/* Category Cards Grid */}
            <div className="space-y-8">
              <h2 className="text-2xl font-bold text-heading">Browse by Category</h2>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {faqCategories.map((category) => (
                  <CategoryCard
                    key={category.id}
                    icon={category.icon}
                    title={category.title}
                    description={category.description}
                  />
                ))}
                <CategoryCard
                  icon={MessageSquare}
                  title="Listings & Pricing"
                  description="Details on listing fees, pricing, and all features"
                />
                <CategoryCard
                  icon={Phone}
                  title="Account & Support"
                  description="Details on account management and support"
                />
                <CategoryCard
                  icon={Mail}
                  title="Account & Support"
                  description="Help with your Carzino account and support"
                />
              </div>
            </div>

            {/* Contact Section */}
            <div className="space-y-8 rounded-lg border bg-card p-8 sm:p-12">
              <div className="max-w-2xl">
                <h2 className="mb-2 text-2xl font-bold text-heading">Still have questions?</h2>
                <p className="text-muted-foreground">
                  If you didn't find what you were looking for, our team is happy to help.
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
