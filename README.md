# CurrencyConverter

A simple currency converter built using React. It allows users to convert an amount from one currency to another using real-time exchange rates.

## Features

- Real-time exchange rates for different currencies
- User-friendly interface with input fields and dropdowns
- Custom hooks and components for state management and reusability

## Getting Started

To get started with the project, follow these steps:

1. Clone the repository to your local machine.
2. Install the dependencies using `npm install`.
3. Start the development server using `npm start`.

## Usage

1. Enter an amount in the input field for the `From` currency.
2. Select the `From` currency from the dropdown.
3. Select the `To` currency from the dropdown.
4. Click the `Convert` button to calculate the converted amount.
5. Click the `Swap` button to swap the `From` and `To` currencies.

## Components

- `App.js`: The main component of the application. It contains the state variables and functions required to handle the conversion logic and user interactions.
- `components/InputBox.js`: A custom component that displays an input field and a dropdown for the user to select a currency.
- `hooks/useCurrencyInfo.js`: A custom hook that returns the exchange rates for a given base currency.

## Dependencies

- React: A JavaScript library for building user interfaces.
- Axios: A promise-based HTTP client for the browser and Node.js.

## Built With

- React
- Axios
- JavaScript
- CSS

## Contributing

We welcome contributions from the community. If you would like to contribute to the project, please submit a pull request.

## Contact

For any questions, please contact [Swapnil Srivastava](mailto:swapnil9srivastava@gmail.com).

## Acknowledgments

- [Exchange Rates API](https://exchangeratesapi.io/) for providing real-time exchange rates.
- [React](https://reactjs.org/) for building user interfaces.
- [Axios](https://axios-http.com/) for making HTTP requests.
