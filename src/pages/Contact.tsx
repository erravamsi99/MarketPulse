
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import Layout from '../components/layout/Layout';
import Section from '../components/ui/Section';
import { Card, CardContent } from '../components/ui/card';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '../components/ui/form';
import { Input } from '../components/ui/input';
import { Button } from '../components/ui/button';
import { Textarea } from '../components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { Mail, Github, Linkedin, ExternalLink } from 'lucide-react';
import { useToast } from '../hooks/use-toast';

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  organization: z.string().optional(),
  inquiryType: z.string({
    required_error: "Please select an inquiry type.",
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
});

type FormValues = z.infer<typeof formSchema>;

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const { toast } = useToast();
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      organization: "",
      inquiryType: "",
      message: "",
    },
  });

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    console.log("Form submitted:", data);
    setIsSubmitting(false);
    setIsSuccess(true);
    
    toast({
      title: "Message sent!",
      description: "Thank you! Our team will get back to you within 24 hours.",
    });
    
    form.reset();
    
    // Reset success message after 5 seconds
    setTimeout(() => setIsSuccess(false), 5000);
  };

  return (
    <Layout>
      <Section className="relative">
        <div className="text-center mb-16">
          <p className="section-heading">Contact</p>
          <h1 className="section-title">Let's Build the Future of Trading</h1>
          <p className="max-w-3xl mx-auto text-muted-foreground text-lg">
            Have questions about MarketPulse? Want to request a demo or discuss partnership opportunities?
            Our team is ready to connect with you.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <Card className="border-border bg-card">
              <CardContent className="p-6 md:p-8">
                {isSuccess ? (
                  <div className="text-center py-12">
                    <div className="h-16 w-16 bg-neon/20 rounded-full flex items-center justify-center mx-auto mb-6">
                      <svg className="h-8 w-8 text-neon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold mb-4">Message Sent!</h3>
                    <p className="text-muted-foreground mb-6">
                      Thank you! Our team will get back to you within 24 hours.
                    </p>
                    <Button 
                      variant="outline" 
                      onClick={() => setIsSuccess(false)}
                    >
                      Send another message
                    </Button>
                  </div>
                ) : (
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <FormField
                          control={form.control}
                          name="name"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Name</FormLabel>
                              <FormControl>
                                <Input placeholder="Your name" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Email</FormLabel>
                              <FormControl>
                                <Input placeholder="Your email address" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <FormField
                          control={form.control}
                          name="organization"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Organization</FormLabel>
                              <FormControl>
                                <Input placeholder="Your company or organization" {...field} />
                              </FormControl>
                              <FormDescription>Optional</FormDescription>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="inquiryType"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Inquiry Type</FormLabel>
                              <Select 
                                onValueChange={field.onChange} 
                                defaultValue={field.value}
                              >
                                <FormControl>
                                  <SelectTrigger>
                                    <SelectValue placeholder="Select purpose" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  <SelectItem value="demo">Demo Request</SelectItem>
                                  <SelectItem value="investment">Investment Inquiry</SelectItem>
                                  <SelectItem value="support">Technical Support</SelectItem>
                                  <SelectItem value="partnership">Partnership</SelectItem>
                                  <SelectItem value="general">General Inquiry</SelectItem>
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                      
                      <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Message</FormLabel>
                            <FormControl>
                              <Textarea 
                                placeholder="How can we help you?" 
                                className="min-h-[120px]" 
                                {...field} 
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <div className="pt-4">
                        <Button 
                          type="submit" 
                          className="w-full bg-neon hover:bg-neon/80 text-black"
                          disabled={isSubmitting}
                        >
                          {isSubmitting ? "Sending..." : "Send Message"}
                        </Button>
                      </div>
                    </form>
                  </Form>
                )}
              </CardContent>
            </Card>
          </div>
          
          <div>
            <div className="space-y-8">
              <Card className="border-border bg-card overflow-hidden">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">Get in Touch</h3>
                  <div className="space-y-6">
                    <div>
                      <p className="text-sm text-muted-foreground mb-2">Email Us</p>
                      <a 
                        href="mailto:info@marketpulse.ai" 
                        className="flex items-center gap-2 text-neon hover:underline"
                      >
                        <Mail size={16} />
                        <span>info@marketpulse.ai</span>
                      </a>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-2">Follow Us</p>
                      <div className="flex gap-4">
                        <a 
                          href="#" 
                          className="h-10 w-10 rounded-full border border-border flex items-center justify-center hover:border-neon hover:bg-neon/10 transition-colors"
                        >
                          <Github size={18} className="text-white hover:text-neon" />
                        </a>
                        <a 
                          href="#" 
                          className="h-10 w-10 rounded-full border border-border flex items-center justify-center hover:border-neon hover:bg-neon/10 transition-colors"
                        >
                          <Linkedin size={18} className="text-white hover:text-neon" />
                        </a>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border-border bg-card">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">Quick Links</h3>
                  <div className="space-y-3">
                    <a href="#" className="flex items-center gap-2 text-muted-foreground hover:text-neon transition-colors">
                      <ExternalLink size={16} />
                      <span>API Documentation</span>
                    </a>
                    <a href="#" className="flex items-center gap-2 text-muted-foreground hover:text-neon transition-colors">
                      <ExternalLink size={16} />
                      <span>Knowledge Base</span>
                    </a>
                    <a href="#" className="flex items-center gap-2 text-muted-foreground hover:text-neon transition-colors">
                      <ExternalLink size={16} />
                      <span>System Status</span>
                    </a>
                  </div>
                </CardContent>
              </Card>

              <div className="p-6 border border-border rounded-lg bg-card">
                <h3 className="text-xl font-bold mb-4">Location</h3>
                <p className="text-muted-foreground mb-2">MarketPulse HQ</p>
                <p className="text-muted-foreground mb-4">
                  88 Financial Street<br />
                  Bengaluru, Karnataka 560001<br />
                  India
                </p>
                <div className="bg-muted h-[180px] w-full rounded flex items-center justify-center">
                  <span className="text-muted-foreground">Map Embed</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </Layout>
  );
};

export default Contact;
