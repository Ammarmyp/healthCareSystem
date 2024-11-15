import PatientForm from "@/components/forms/PatientForm";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-row-reverse h-screen max-h-screen">
      <section className="remove-scrollbar container my-auto ">
        <div className="max-w-[490px] mx-auto flex size-full flex-col py-10">
          <Link href={"/"}>
            <Image
              src={"/assets/icons/logo.svg"}
              alt="logo"
              width={1000}
              height={1000}
              className="h-8 w-fit mb-12"
            />
          </Link>
          <PatientForm />
          <div className="text-base mt-20 flex justify-between">
            <p className=" justify-items-end text-dark-600 xl:text-left">
              © {new Date().getFullYear()} PaamyCare
            </p>
            <Link href={""} className="text-green-500 hover:text-green-500/60">
              Admin
            </Link>
          </div>
        </div>
      </section>
      <Image
        src={"/assets/images/HomeImg.png"}
        alt="home doctor image"
        width={1000}
        height={1000}
        className="max-w-[50%] w-full object-cover h-full hidden md:block rounded-md"
      />
    </div>
  );
}
