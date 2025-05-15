import HomePage from '@/app/page';
import { CartProvider } from '@/context/cart';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { render } from '@testing-library/react';

const mockedProducts = [
  {
    name: 'Espresso',
    description: 'Café puro e forte em dose pequena',
    price: 822,
    image:
      'https://s2-g1.glbimg.com/detGX6jAIpR0gJnvyYW2-o4GEmI=/0x0:1920x1280/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2018/W/u/Q79lelQCKAYh1GlAu3ag/coffe-1354786-1920.jpg',
    id: 'd4a45678-4444-4dd4-ef44-456789012004',
    createdAt: '2025-05-13T20:05:15.000Z',
    category: 'Bebida',
    quantity: 0,
  },
  {
    name: 'Macchiato',
    description: 'Espresso com uma pequena quantidade de espuma de leite',
    price: 914,
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAwa7w5Fc-XqHlCX4Fxc2D1deyEofvlVig4Q&s',
    id: 'e5b56789-5555-4ee5-fg55-567890123005',
    createdAt: '2025-05-13T20:05:20.000Z',
    category: 'Bebida',
    quantity: 0,
  },
];

// jest.mock('../src/app/features/products/services/products.service', () => {
//   console.log('MOCKED products.service loaded');
//   return {
//     listProducts: jest.fn().mockResolvedValue(mockedProducts),
//     createProduct: jest.fn(),
//   };
// });

let queryClient: QueryClient;

beforeEach(() => {
  queryClient = new QueryClient();
});

function renderWithProviders(children: React.ReactElement) {
  return render(
    <QueryClientProvider client={queryClient}>
      <CartProvider>{children}</CartProvider>
    </QueryClientProvider>,
  );
}

describe('Home Page Snapshot', () => {
  it('should match snapshot before data loads', () => {
    const { asFragment } = renderWithProviders(<HomePage />);
    expect(asFragment()).toMatchSnapshot();
  });

  //TODO: Incomplete test case
  // it('should match snapshot after data loads', async () => {
  //   jest
  //     .spyOn(productService, 'listProducts')
  //     .mockResolvedValue(mockedProducts);

  //   const { asFragment, getByTestId } = renderWithProviders(<HomePage />);

  //   await waitFor(() => {
  //     expect(getByTestId('product-list')).toBeTruthy();
  //   });

  //   expect(asFragment()).toMatchSnapshot();
  // });
});
