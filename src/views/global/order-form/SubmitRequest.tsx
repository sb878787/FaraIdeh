'use client';

// Components
import Container from '@/component/Container';
import SelectCategory from './SelectCategory';
import FormRequest from './FormRequest';
import ServicesSVGAbout from '@/component/icons/SVG/ServicesSVGAbout';

const SubmitRequest = () => {
  return (
    <div
      className="bg-[#F9F9F9] mt-14 lg:mt-32 rtl pb-10 pt-1 lg:py-28 lg:pt-32 relative"
      id="services"
    >
      <Container>
        <SelectCategory />
        <FormRequest />
      </Container>

      <div className="absolute right-0 -top-20 hidden xl:block">
        <ServicesSVGAbout />
      </div>
    </div>
  );
};

export default SubmitRequest;
