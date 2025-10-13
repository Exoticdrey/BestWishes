import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
// import CardStep0 from "../components/cards/CardStep0";
import CardStep1 from "../components/cards/CardStep1";
import CardStep2 from "../components/cards/CardStep2";
import CardStep3 from "../components/cards/CardStep3";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../ui/Footer";
import "./CreateCard.css";

function CreateCard() {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({});

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
    setValue,
  } = useForm({
    defaultValues: formData,
  });

  useEffect(() => {
    const subscription = watch((values) => {
      setFormData((prev) => ({ ...prev, ...values }));
    });
    return () => subscription.unsubscribe();
  }, [watch]);

  useEffect(() => {
    reset(formData);
  }, [currentStep]);

  const steps = [
    { title: "Details", Component: CardStep1 },
    { title: "Info", Component: CardStep2 },
    { title: "Preview Selection", Component: CardStep3 },
    // { title: "Confirmation", Component: CardStep4 },
  ];

  const isLastStep = currentStep === steps.length - 1;
  const isFirstStep = currentStep === 0;

  const goNext = (data) => {
    setFormData((prev) => ({ ...prev, ...data }));
    if (!isLastStep) setCurrentStep((s) => s + 1);
    else finalize({ ...formData, ...data });
  };

  const goBack = () => setCurrentStep((s) => Math.max(0, s - 1));

  const finalize = (data) => {
    const finalData = { ...formData, ...data };
    console.log("Final submission:", finalData);
    alert("Form submitted successfully!");
  };

  const onNext = () => handleSubmit(goNext)();
  const onFinish = () => handleSubmit(finalize)();

  const { Component } = steps[currentStep];

  return (
    <>
      <Navbar />

      <div className="create-card">
        <div className="create-card-headline">
          <h2>Personalize your card</h2>
          <p>
            Express your emotions through personalized cards with images, music
            and a lot more features to create a special experience
          </p>
        </div>

        <Component
          register={register}
          errors={errors}
          watch={watch}
          formData={formData}
          onNext={onNext}
          onBack={goBack}
          onFinish={onFinish}
          isFirst={isFirstStep}
          isLast={isLastStep}
          setValue={setValue}
        />
      </div>

      <Footer />
    </>
  );
}

export default CreateCard;
