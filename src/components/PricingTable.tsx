import { Card } from "@/components/ui/card";

const PricingTable = () => {
  return (
    <section
      id="pricing"
      className="py-20 bg-gradient-to-br from-blue-50 via-sky-100 to-indigo-100"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title text-4xl font-extrabold text-blue-700 drop-shadow-lg">
            Online Tutoring Pricing
          </h2>
          <p className="section-subtitle text-lg text-black">
            Transparent pricing with no hidden charges. All prices include{" "}
            <span className="font-bold text-blue-800">30% discount</span>.
          </p>
        </div>

        <div className="overflow-x-auto">
          <Card className="border-0 shadow-2xl rounded-xl overflow-hidden bg-gradient-to-br from-white via-blue-50 to-sky-100">
            <table className="w-full min-w-[600px]">
              <thead>
                <tr className="bg-gradient-to-r from-blue-700 via-sky-500 to-indigo-400 text-white">
                  <th className="px-6 py-4 text-left text-lg font-semibold">Courses</th>
                  <th className="px-6 py-4 text-left text-lg font-semibold">Boards</th>
                  <th className="px-6 py-4 text-left text-lg font-semibold">Price (30% Off Applied)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-blue-100">
                <tr className="hover:bg-sky-100 transition-colors">
                  <td className="px-6 py-4 text-blue-900 font-semibold">Classes 6 to 8</td>
                  <td className="px-6 py-4 text-black">ICSE, CBSE, State Board</td>
                  <td className="px-6 py-4 font-bold text-blue-700">₹350 per session</td>
                </tr>
                <tr className="hover:bg-sky-100 transition-colors">
                  <td className="px-6 py-4 text-blue-900 font-semibold">Classes 9 to 10</td>
                  <td className="px-6 py-4 text-black">CBSE, State Board</td>
                  <td className="px-6 py-4 font-bold text-blue-700">₹450 per session</td>
                </tr>
                <tr className="hover:bg-sky-100 transition-colors">
                  <td className="px-6 py-4 text-blue-900 font-semibold">Classes 11 to 12</td>
                  <td className="px-6 py-4 text-black">CBSE, State Board</td>
                  <td className="px-6 py-4 font-bold text-blue-700">₹450 per session</td>
                </tr>
                <tr className="hover:bg-sky-100 transition-colors">
                  <td className="px-6 py-4 text-blue-900 font-semibold">NEET / JEE Coaching</td>
                  <td className="px-6 py-4 text-black">National Level</td>
                  <td className="px-6 py-4 font-bold text-blue-700">₹500 per session</td>
                </tr>
              </tbody>
            </table>
          </Card>
        </div>

        <div className="mt-8 bg-gradient-to-r from-blue-100 via-sky-50 to-indigo-100 p-6 rounded-lg shadow-md max-w-3xl mx-auto border border-blue-200">
          <h3 className="text-xl font-semibold text-blue-700 mb-4">
            Additional Information
          </h3>
          <ul className="space-y-2">
            <li className="flex items-start">
              <span className="text-blue-600 mr-2 font-bold">✓</span>
              <span className="text-black">Each session is 90 minutes</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-2 font-bold">✓</span>
              <span className="text-black">
                Prices are final after discount, with no hidden charges
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-2 font-bold">✓</span>
              <span className="text-black">
                Expert instructors with years of teaching experience
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-2 font-bold">✓</span>
              <span className="text-black">
                Interactive virtual classroom experience
              </span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default PricingTable;