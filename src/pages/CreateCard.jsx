<<<<<<< HEAD
import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
// import CardStep1 from "../components/cards/CardStep0";
import CardStep1 from "../components/cards/CardStep1";
import CardStep2 from "../components/cards/CardStep2";
import CardStep3 from "../components/cards/CardStep3";
import Navbar from "../ui/Navbar";
import Footer from "../ui/Footer";
=======
import Navbar from "../components/Navbar/Navbar";
import SlideUp from "../ui/SlideUp";
>>>>>>> 4c4234198d831f53d4a13acbdbb991e7334b2e64
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
    defaultValues: formData, // preload any saved data
  });

  // Watch form fields and update formData in real-time
  useEffect(() => {
    const subscription = watch((values) => {
      setFormData((prev) => ({ ...prev, ...values }));
    });
    return () => subscription.unsubscribe();
  }, [watch]);

  // Reset form fields ONLY when changing steps
  useEffect(() => {
    reset(formData);
  }, [currentStep]); // removed formData from dependencies

  const steps = [
    { title: "Details", Component: CardStep1 },
    { title: "Info", Component: CardStep2 },
    { title: "Preview Selection", Component: CardStep3 },
    // { title: "Confirmation", Component: CardStep4 },
  ];

  const isLastStep = currentStep === steps.length - 1;
  const isFirstStep = currentStep === 0;

  // Go to next step and save current data
  const goNext = (data) => {
    setFormData((prev) => ({ ...prev, ...data }));
    if (!isLastStep) setCurrentStep((s) => s + 1);
    else finalize({ ...formData, ...data }); // if last step, submit
  };

  // Go back to previous step
  const goBack = () => setCurrentStep((s) => Math.max(0, s - 1));

  // Final form submission
  const finalize = (data) => {
    const finalData = { ...formData, ...data };
    console.log("Final submission:", finalData);
    alert("Form submitted successfully!");
  };

  // Helpers for buttons
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
