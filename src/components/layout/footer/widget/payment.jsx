import Image from "@components/ui/image";

const Payment = ({ className, payments }) => {
  return (
    <div className="text-center my-8">
      <p className="font-semibold text-md uppercase">Payment Accepted</p>
      <div className="flex items-center justify-center mt-2">
        {payments.map((item, index) => (
          <div key={index} className=" mx-2 transition hover:opacity-80">
            <Image
              src={item.image}
              alt={item.name}
              height={item.height}
              width={item.width}
              className="transform scale-85 md:scale-100"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Payment;
