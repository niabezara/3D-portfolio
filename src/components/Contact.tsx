import styled from "styled-components";
import { SubmitHandler, useForm } from "react-hook-form";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import MapChart from "./Map";

type Inputs = {
  to_name: string;
  from_name: string;
  message: string;
};

export default function Contact() {
  const [success, setSuccess] = useState<boolean | null>(null);
  const ref = useRef<HTMLFormElement | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data: any) => {
    console.log(ref.current);
    emailjs
      .sendForm(
        "service_w738nml",
        "template_iwj0h03",
        ref.current as HTMLFormElement,

        "7j8ZCi3gTrC9-IGNK"
      )
      .then(
        (result) => {
          console.log(result.text);
          setSuccess(true);
        },
        (error) => {
          console.log(error.text);
          setSuccess(false);
        }
      );

    console.log(data);
    setSuccess(true);
  };

  return (
    <Section>
      <Container>
        <Left>
          <Form ref={ref} onSubmit={handleSubmit(onSubmit)}>
            <Title>Contact Us</Title>
            <Input
              placeholder="Name"
              {...register("to_name", { required: true })}
              aria-invalid={errors.to_name ? "true" : "false"}
            />
            {errors.to_name?.type === "required" && (
              <p role="alert">First name is required</p>
            )}

            <Input
              placeholder="Email"
              {...register("from_name", {
                required: "Email Address is required",
              })}
              aria-invalid={errors.from_name ? "true" : "false"}
            />
            {errors.from_name && <p role="alert">{errors.from_name.message}</p>}
            <TextArea
              placeholder="Write your message"
              {...register("message", { required: true })}
            />
            <Button type="submit">Send</Button>
            {success &&
              "Your message has been sent. We'll get back to you soon :)"}
          </Form>
        </Left>
        <Right>
          <MapChart />
        </Right>
      </Container>
    </Section>
  );
}

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  gap: 50px;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  @media only screen and (max-width: 768px) {
    justify-content: center;
  }
`;

const Title = styled.h1`
  font-weight: 200;
`;

const Form = styled.form`
  width: 500px;
  display: flex;
  flex-direction: column;
  gap: 25px;

  @media only screen and (max-width: 768px) {
    width: 300px;
  }
`;

const Input = styled.input`
  padding: 20px;
  background-color: #e8e6e6;
  border: none;
  border-radius: 5px;
`;

const TextArea = styled.textarea`
  padding: 20px;
  border: none;
  border-radius: 5px;
  background-color: #e8e6e6;
`;

const Button = styled.button`
  background-color: #da4ea2;
  color: white;
  border: none;
  font-weight: bold;
  cursor: pointer;
  border-radius: 5px;
  padding: 20px;
`;

const Right = styled.div`
  flex: 1;

  @media only screen and (max-width: 768px) {
    display: none;
  }
`;
