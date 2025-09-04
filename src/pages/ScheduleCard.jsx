import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import ScheduleCard1 from "../components/schedule/ScheduleCard1";
import ScheduleCard2 from "../components/schedule/ScheduleCard2";
import ScheduleCard3 from "../components/schedule/ScheduleCard3";
import Navbar from "../ui/Navbar";
import Footer from "../ui/Footer";
import "./ScheduleCard.css";

function ScheduleCard() {
  const [currentScheduleStep, setCurrentScheduleStep] = useState(0);
  const [scheduleFormData, setScheduleFormData] = useState({});

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
    setValue,
  } = useForm({
    defaultValues: scheduleFormData, // preload any saved data
  });

  // Watch form fields and update formData in real-time
  useEffect(() => {
    const subscription = watch((values) => {
      setScheduleFormData((prev) => ({ ...prev, ...values }));
    });
    return () => subscription.unsubscribe();
  }, [watch]);

  // Reset form fields ONLY when changing steps
  useEffect(() => {
    reset(scheduleFormData);
  }, [currentScheduleStep]); // removed formData from dependencies

  const steps = [
    { title: "Anniversary Details", Component: ScheduleCard1 },
    { title: "Additional Info", Component: ScheduleCard2 },
    { title: "Preview Selection", Component: ScheduleCard3 },
    // { title: "Confirmation", Component: CardStep4 },
  ];

  const isLastStep = currentScheduleStep === steps.length - 1;
  const isFirstStep = currentScheduleStep === 0;

  // Go to next step and save current data
  const goNext = (data) => {
    setScheduleFormData((prev) => ({ ...prev, ...data }));
    if (!isLastStep) setCurrentScheduleStep((s) => s + 1);
    else finalize({ ...scheduleFormData, ...data }); // if last step, submit
  };

  // Go back to previous step
  const goBack = () => setCurrentScheduleStep((s) => Math.max(0, s - 1));

  // Final form submission
  const finalize = (data) => {
    const finalData = { ...scheduleFormData, ...data };
    console.log("Final submission:", finalData);
    alert("Form submitted successfully!");
  };

  // Helpers for buttons
  const onNext = () => handleSubmit(goNext)();
  const onFinish = () => handleSubmit(finalize)();

  const { Component } = steps[currentScheduleStep];

  return (
    <>
      <Navbar />

      <div className="schedule">
        <div className="schedule-headline">
          <h2>Schedule your Card</h2>
          <p>
            Express your emotions through personalized cards with images, music
            and a lot more features to create a special experience
          </p>
        </div>

        <Component
          register={register}
          errors={errors}
          watch={watch}
          scheduleFormData={scheduleFormData}
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

export default ScheduleCard;
