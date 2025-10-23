
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const SpecialKidsTutoring = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title">Special Kids Tutoring</h2>
          <p className="section-subtitle">
            Personalized educational support for children with learning differences in Classes 1 to 10
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="border-0 shadow-lg overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="bg-royal-50 p-8">
                <CardHeader className="px-0">
                  <CardTitle className="text-2xl mb-4">Our Approach</CardTitle>
                </CardHeader>
                <CardContent className="px-0">
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <div className="mr-3 mt-1 bg-royal-500 text-white rounded-full p-1 flex items-center justify-center w-5 h-5 text-xs">✓</div>
                      <div>
                        <h4 className="font-medium">Customized Teaching</h4>
                        <p className="text-gray-600 mt-1">Teaching methods adapted to individual learning styles</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="mr-3 mt-1 bg-royal-500 text-white rounded-full p-1 flex items-center justify-center w-5 h-5 text-xs">✓</div>
                      <div>
                        <h4 className="font-medium">Patience & Care</h4>
                        <p className="text-gray-600 mt-1">Educators trained in special education techniques</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="mr-3 mt-1 bg-royal-500 text-white rounded-full p-1 flex items-center justify-center w-5 h-5 text-xs">✓</div>
                      <div>
                        <h4 className="font-medium">Regular Progress Reports</h4>
                        <p className="text-gray-600 mt-1">Detailed feedback on learning milestones</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="mr-3 mt-1 bg-royal-500 text-white rounded-full p-1 flex items-center justify-center w-5 h-5 text-xs">✓</div>
                      <div>
                        <h4 className="font-medium">Available for Classes 1-10</h4>
                        <p className="text-gray-600 mt-1">Elementary and middle school curriculum focus</p>
                      </div>
                    </li>
                  </ul>
                </CardContent>
              </div>

              <div className="p-8">
                <CardHeader className="px-0">
                  <CardTitle className="text-2xl mb-4">Pricing Details</CardTitle>
                </CardHeader>
                <CardContent className="px-0">
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-medium text-lg">Online Sessions</h4>
                      <p className="text-3xl font-bold text-royal-700 mt-2">₹499<span className="text-base font-normal text-gray-600">/session</span></p>
                      <p className="text-gray-600 mt-1">Interactive virtual learning environment</p>
                    </div>
                    
                    <div>
                      <h4 className="font-medium text-lg">Home Tuition</h4>
                      <p className="text-3xl font-bold text-royal-700 mt-2">₹999<span className="text-base font-normal text-gray-600">/session</span></p>
                      <p className="text-gray-600 mt-1">Personal attention in the comfort of home</p>
                    </div>
                    
                    <div className="bg-yellow-50 p-4 rounded-md mt-6">
                      <p className="text-yellow-700 font-medium">Note: NEET/JEE coaching not offered for this category</p>
                    </div>
                    
                    <Button className="w-full bg-royal-500 hover:bg-royal-600 mt-4">
                      Request Information
                    </Button>
                  </div>
                </CardContent>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default SpecialKidsTutoring;
