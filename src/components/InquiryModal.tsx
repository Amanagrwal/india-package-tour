import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { CalendarIcon, Send } from "lucide-react";
import { format } from "date-fns";
import { toast } from "sonner";
import { cn } from "@/lib/utils";

interface InquiryModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  defaultDestination?: string;
}

const InquiryModal = ({ open, onOpenChange, defaultDestination = "" }: InquiryModalProps) => {
  const [date, setDate] = useState<Date>();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    destination: defaultDestination,
    travelers: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.phone || !formData.email) {
      toast.error("Please fill in all required fields");
      return;
    }

    // Prepare WhatsApp message
    const whatsappMessage = `*New Tour Inquiry*%0A%0A*Name:* ${formData.name}%0A*Phone:* ${formData.phone}%0A*Email:* ${formData.email}%0A*Destination:* ${formData.destination}%0A*Travel Date:* ${date ? format(date, "PPP") : "Not specified"}%0A*Travelers:* ${formData.travelers || "Not specified"}%0A*Message:* ${formData.message || "None"}`;
    
    // Open WhatsApp
    window.open(`https://wa.me/919876543210?text=${whatsappMessage}`, "_blank");
    
    toast.success("Inquiry sent! We'll contact you soon.");
    onOpenChange(false);
    
    // Reset form
    setFormData({
      name: "",
      phone: "",
      email: "",
      destination: "",
      travelers: "",
      message: "",
    });
    setDate(undefined);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold bg-gradient-india bg-clip-text text-transparent">
            Get Free Quote
          </DialogTitle>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div className="space-y-2">
            <Label htmlFor="name">Full Name *</Label>
            <Input
              id="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number *</Label>
              <Input
                id="phone"
                type="tel"
                placeholder="+91 98765 43210"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email *</Label>
              <Input
                id="email"
                type="email"
                placeholder="your@email.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
              />
            </div>
          </div>

          {/* <div className="space-y-2">
            <Label htmlFor="destination">Destination</Label>
            <Input
              id="destination"
              placeholder="e.g., Rajasthan, Kerala"
              value={formData.destination}
              onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
            />
          </div> */}

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>Travel Date</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className={cn(
                      "w-full justify-start text-left font-normal",
                      !date && "text-muted-foreground"
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {date ? format(date, "PPP") : "Pick a date"}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
            </div>
            <div className="space-y-2">
              <Label htmlFor="travelers">No. of Travelers</Label>
              <Input
                id="travelers"
                type="number"
                min="1"
                placeholder="e.g., 2"
                value={formData.travelers}
                onChange={(e) => setFormData({ ...formData, travelers: e.target.value })}
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">Message (Optional)</Label>
            <Textarea
              id="message"
              placeholder="Any special requests or questions?"
              rows={3}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            />
          </div>

          <Button type="submit" variant="hero" size="lg" className="w-full">
            <Send className="mr-2 h-4 w-4" />
            Submit Inquiry
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default InquiryModal;
