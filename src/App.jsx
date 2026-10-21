import { useState } from "react";

function App() {
  const [mobile, setMobile] = useState("");
  const [message, setMessage] = useState("");

  const handleMobileChange = (event) => {
    const value = event.target.value.replace(/\D/g, "").slice(0, 10);
    setMobile(value);
    setMessage("");
  };

  const handleSendOTP = (event) => {
    event.preventDefault();

    if (mobile.length !== 10) {
      setMessage("Please enter a valid 10-digit mobile number.");
      return;
    }

    setMessage("Mobile number is valid. Connect an OTP backend to send OTP.");
  };

  return (
    <main className="min-h-screen bg-[#f7f7ef] px-4 py-8 sm:py-12">
      <section className="mx-auto w-full max-w-md rounded-2xl bg-white px-6 py-8 shadow-sm sm:px-8">
        {/* Logo */}
        <div className="mb-8 flex flex-col items-center">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-50 text-4xl">
            🛍️
          </div>

          <h1 className="mt-2 text-2xl font-extrabold tracking-tight">
            <span className="text-green-700">aas</span>
            <span className="text-orange-500">Pass</span>
          </h1>
        </div>

        {/* Heading */}
        <p className="text-xs font-bold tracking-wider text-green-700">
          YOUR NEIGHBOURHOOD, CLOSER
        </p>

        <h2 className="mt-3 text-3xl font-extrabold leading-tight text-stone-800">
          Essentials from local stores, delivered fast.
        </h2>

        <p className="mt-3 text-sm leading-6 text-stone-500">
          Sign in with your mobile number to continue.
        </p>

        {/* Login Form */}
        <form onSubmit={handleSendOTP} className="mt-7">
          <label
            htmlFor="mobile"
            className="mb-2 block text-sm font-semibold text-stone-700"
          >
            Mobile number
          </label>

          <div className="flex overflow-hidden rounded-xl border border-stone-200 bg-white focus-within:border-green-600 focus-within:ring-2 focus-within:ring-green-100">
            <span className="flex items-center border-r border-stone-200 px-4 text-sm font-semibold text-stone-700">
              +91
            </span>

            <input
              id="mobile"
              type="tel"
              inputMode="numeric"
              autoComplete="tel-national"
              placeholder="10-digit number"
              value={mobile}
              onChange={handleMobileChange}
              maxLength={10}
              className="min-w-0 flex-1 px-4 py-4 text-sm text-stone-800 outline-none placeholder:text-stone-400"
            />
          </div>

          <button
            type="submit"
            className="mt-5 w-full rounded-full bg-green-600 px-5 py-4 text-sm font-bold text-white transition hover:bg-green-700 focus:outline-none focus:ring-4 focus:ring-green-100"
          >
            Send OTP
          </button>

          {message && (
            <p role="status" className="mt-3 text-sm text-stone-600">
              {message}
            </p>
          )}
        </form>

        {/* Server Settings */}
        <button
          type="button"
          onClick={() =>
            setMessage(
              "Server settings will be configured when we connect the backend."
            )
          }
          className="mt-6 block w-full text-center text-xs text-stone-500 underline underline-offset-4 hover:text-green-700"
        >
          Server connection settings
        </button>
      </section>
    </main>
  );
}

export default App;

