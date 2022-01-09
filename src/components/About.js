export const About = (props) => {
  return (
    <div className="flex items-center justify-center">
      <div className="bg-white overflow-hidden sm:max-w-2xl">
        <div className="flex flex-col sm:flex-row">
          <div className="sm:shrink-0">
            <img
              className="w-full sm:w-[193px] h-[200px] object-cover object-bottom sm:object-center"
              src="https://images.unsplash.com/photo-1637734433731-621aca1c8cb6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=404&q=80"
              width="202"
              height="192"
              alt="Beautiful abstract building in the sun"
            />
          </div>
          <div className="p-6 2xl:p-8 space-y-2">
            <div className="font-medium text-sm leading-6 text-indigo-600">
              ABOUT US
            </div>
            <a
              href="#"
              className="block font-semibold text-base text-gray-900 leading-6 hover:underline">
              AS Creative cares about the little guys!
            </a>
            <p className="text-sm text-gray-600 leading-6">
              With over 8 years of experience working in Digital Marketing and
              Design, we specialise in Social Media Strategy and Execution,
              Website Management and Graphic Design. Our desire is to become a
              trusted digital marketing agency in the Buckinghamshire area and
              deliver business-changing results for small and family-owned
              businesses. When it comes to marketing and design, we understand
              it can get confusing and frustrating. Our promise to clients is to
              communicate in a user-friendly way, creating clarity and
              transparency in our work, because sometimes all we need is a
              little push in the right direction.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
