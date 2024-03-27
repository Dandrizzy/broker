import { Button, Flex } from "@radix-ui/themes";
import { useNavigate } from "react-router-dom";

const Intro = () => {
 const navigate = useNavigate();
 return (
  <div className=" p-4 pb-8  text-white flex flex-col justify-center items-center gap-3 min-h-screen">
   <p className=" pt-8 sm:text-6xl text-4xl font-semibold leading-10 tracking-tight mb-2 uppercase text-center">
    Safe
    <br />
    investment
    <br />with GOLDEN TRADE FX
   </p>
   <p className=" font-semibold sm:text-xl text-center pb-6">GET LIFETIME INCOME ON INVESTMENT</p>
   <Flex align="center" gap="3">
    <Button variant="solid" size='4' onClick={() => navigate('/user/plans')}>Start Earning</Button>
   </Flex>

  </div>
 );
};

export default Intro;