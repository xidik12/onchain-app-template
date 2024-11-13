import { Checkout, CheckoutButton, CheckoutStatus } from '@coinbase/onchainkit/checkout';
 
<Checkout productId='c1221f5f-0365-4a27-8859-c73fe621461a' > 
  <CheckoutButton coinbaseBranded/> // set coinbaseBranded for branding
  <CheckoutStatus />
</Checkout>
