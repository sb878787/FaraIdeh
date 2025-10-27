'use client';

// React Imports
import { useState } from 'react';

// Components
import Container from '@/component/Container';
import SelectCategory from './SelectCategory';
import FormRequest from './FormRequest';
import ServicesSVGAbout from '@/component/icons/SVG/ServicesSVGAbout';

// Actions
import { createOrder } from '@/app/actions/createOrder';

const SubmitRequest = () => {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleFormSubmit = async (formData: {
    name: string;
    family: string;
    phone: string;
    email: string;
    message: string;
  }) => {
    setIsSubmitting(true);
    try {
      const result = await createOrder({
        categories: selectedCategories,
        users: [
          {
            firstName: formData.name,
            lastName: formData.family,
            contactNumber: formData.phone,
            email: formData.email,
          },
        ],
        description: formData.message,
      });

      if (!result.success) {
        throw new Error(result.error);
      }

      // Reset categories after successful submission
      setSelectedCategories([]);
    } catch (error) {
      throw error;
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      className="bg-[#F9F9F9] mt-14 lg:mt-32 rtl pb-10 pt-1 lg:py-28 lg:pt-32 relative"
      id="services"
    >
      <Container>
        <SelectCategory
          selectedCategories={selectedCategories}
          onCategoriesChange={setSelectedCategories}
        />
        <FormRequest
          selectedCategories={selectedCategories}
          onSubmit={handleFormSubmit}
          isSubmitting={isSubmitting}
        />
      </Container>

      <div className="absolute right-0 -top-20 hidden xl:block">
        <ServicesSVGAbout />
      </div>
    </div>
  );
};

export default SubmitRequest;
