import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { useNavigate } from "react-router-dom";
import { Laptop, UserCheck, FileText, Users2, MessageCircle, Globe } from "lucide-react";

const serviceData = [
  {
    title: "Online Classes",
    description: "Expert-led virtual learning experiences with interactive sessions and personalized attention.",
    icon: Laptop,
    bgGradient: "bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500",
    highlight: "Most Popular"
  },
  {
    title: "Home Tuitions",
    description: "Personalized one-on-one tutoring at your location. Prices vary based on distance.",
    icon: UserCheck,
    bgGradient: "bg-gradient-to-br from-green-400 via-teal-400 to-blue-500",
    highlight: "Contact for Pricing"
  },
  {
    title: "Study Materials",
    description: "Comprehensive study guides, practice tests, and learning resources tailored to your curriculum.",
    icon: FileText,
    bgGradient: "bg-gradient-to-br from-yellow-400 via-orange-400 to-red-400",
    highlight: "High Quality"
  },
  {
    title: "Special Kids Support",
    description: "Customized learning plans for children with unique learning needs (Classes 1-10 only).",
    icon: Users2,
    bgGradient: "bg-gradient-to-br from-pink-400 via-red-400 to-purple-500",
    highlight: "Specialized Care"
  },
  {
    title: "Spoken English",
    description: "Build English language fluency with focus on grammar, conversation, and practical communication.",
    icon: MessageCircle,
    bgGradient: "bg-gradient-to-br from-blue-400 via-indigo-400 to-purple-400",
    highlight: "Native Speakers"
  },
  {
    title: "Hindi Language",
    description: "Learn Hindi from basics to advanced levels with expert language instructors.",
    icon: Globe,
    bgGradient: "bg-gradient-to-br from-amber-400 via-orange-500 to-red-500",
    highlight: "All Levels"
  }
];

const AcademicServices = () => {
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleLearnMore = (serviceName: string) => {
    navigate("/contact#reach-us");
  };

  return (
    <section id="academic" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title">Academic Tutoring Services</h2>
          <p className="section-subtitle">
            Our comprehensive range of academic services designed to help students excel in their studies
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceData.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card key={index} className="edu-card group overflow-hidden flex flex-col relative">
                <div className="absolute top-4 right-4 bg-blue-600 text-white text-xs py-1 px-3 rounded-full font-semibold shadow z-10">
                  {service.highlight}
                </div>
                <CardHeader>
                  <div className={`w-16 h-16 flex items-center justify-center rounded-full shadow-md ${service.bgGradient} text-white mb-4 transform group-hover:scale-110 transition-transform`}>
                    <Icon size={28} />
                  </div>
                  <CardTitle className="text-2xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardContent>
                <CardFooter className="flex-1 flex items-end">
                  <Button 
                    className="w-full bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold"
                    onClick={() => handleLearnMore(service.title)}
                  >
                    Book Now
                  </Button>
                </CardFooter>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AcademicServices;
