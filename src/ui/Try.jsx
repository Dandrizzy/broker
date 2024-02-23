import { ArrowRightIcon } from '@radix-ui/react-icons';
import { Button, Flex, } from '@radix-ui/themes';

const Try = () => {
 return (
  <div className='p-4 mt-8'>
   <Flex gap="3" align="center">
    <Button variant="classic">
     Get started <ArrowRightIcon />
    </Button>
    <Button variant="solid">
     Get started <ArrowRightIcon />
    </Button>
    <Button radius='full' variant="soft">
     Get started <ArrowRightIcon />
    </Button>
   </Flex>
  </div>

 );
};

export default Try;