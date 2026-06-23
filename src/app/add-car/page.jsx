"use client";

const AddCarPage = () => {
    const handleSubmit = async (e)=>{
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const car = Object.fromEntries(formData.entries());
        console.log(car,"car data");
        

       const res = await fetch('http://localhost:5000/cars',{
            method:'POST',
            headers :{
                'Content-Type':'application/json'
            },
            body: JSON.stringify(car)
        })
        const newCar = await res.json();
        console.log(newCar, "Newly added car");
    }

  return (
    <section className="min-h-screen bg-[#0F0F17] py-16 px-4 relative overflow-hidden">
      {/* Glow Effects */}
      <div className="absolute top-20 left-10 h-72 w-72 rounded-full bg-purple-700/20 blur-3xl"></div>
      <div className="absolute bottom-10 right-10 h-72 w-72 rounded-full bg-violet-700/20 blur-3xl"></div>

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-10">
          <span className="px-4 py-2 rounded-full border border-purple-500/30 bg-purple-900/20 text-purple-400 text-sm font-medium">
            Add New Vehicle
          </span>

          <h1 className="mt-5 text-4xl md:text-5xl font-extrabold text-white">
            List Your Car on
            <span className="block text-transparent bg-clip-text bg-linear-to-r from-purple-400 to-violet-500">
              FLUXRIDE
            </span>
          </h1>

          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
            Add your vehicle details and start earning from your car rentals.
          </p>
        </div>

        {/* Form */}
        <div className="bg-white/5 backdrop-blur-xl border border-purple-900/30 rounded-3xl p-8 md:p-10 shadow-2xl">
          <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-6">
            {/* Car Name */}
            <div>
              <label className="text-gray-300 mb-2 block">
                Car Name
              </label>
              <input
              name="carName"
                type="text"
                placeholder="BMW M4"
                className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-700 text-white focus:border-purple-500 outline-none"
              />
            </div>

            {/* Rent Price */}
            <div>
              <label className="text-gray-300 mb-2 block">
                Daily Rent Price
              </label>
              <input
                name="rentPrice"
                type="number"
                placeholder="$120"
                className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-700 text-white focus:border-purple-500 outline-none"
              />
            </div>

            {/* Car Type */}
            <div>
              <label className="text-gray-300 mb-2 block">
                Car Type
              </label>
              <select
                name="carType"
                className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-700 text-white focus:border-purple-500 outline-none"
              >
                <option>SUV</option>
                <option>Sedan</option>
                <option>Hatchback</option>
                <option>Luxury</option>
                <option>Convertible</option>
                <option>Sports</option>
                <option>Electric</option>
              </select>
            </div>

            {/* Seat Capacity */}
            <div>
              <label className="text-gray-300 mb-2 block">
                Seat Capacity
              </label>
              <input
                name="seatCapacity"
                type="number"
                placeholder="5"
                className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-700 text-white focus:border-purple-500 outline-none"
              />
            </div>

            {/* Image URL */}
            <div className="md:col-span-2">
              <label className="text-gray-300 mb-2 block">
                Image URL
              </label>
              <input
                name="imageUrl"
                type="url"
                placeholder="https://i.ibb.co/example.jpg"
                className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-700 text-white focus:border-purple-500 outline-none"
              />
            </div>

            {/* Pickup Location */}
            <div className="md:col-span-2">
              <label className="text-gray-300 mb-2 block">
                Pickup Location
              </label>
              <input
                name="pickupLocation"
                type="text"
                placeholder="Dhaka, Bangladesh"
                className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-700 text-white focus:border-purple-500 outline-none"
              />
            </div>

            {/* Availability */}
            <div className="md:col-span-2">
              <label className="text-gray-300 mb-2 block">
                Availability Status
              </label>
              <select
                name="availabilityStatus"
                className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-700 text-white focus:border-purple-500 outline-none"
              >
                <option>Available</option>
                <option>Unavailable</option>
              </select>
            </div>

            {/* Description */}
            <div className="md:col-span-2">
              <label className="text-gray-300 mb-2 block">
                Description
              </label>
              <textarea
                name="description"
                rows="5"
                placeholder="Write car details..."
                className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-700 text-white focus:border-purple-500 outline-none resize-none"
              ></textarea>
            </div>

            {/* Submit */}
            <div className="md:col-span-2 mt-2">
              <button 
                type="submit"
                className="w-full py-4 rounded-xl bg-linear-to-r from-purple-700 to-violet-600 text-white font-semibold text-lg transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_0_35px_rgba(168,85,247,0.45)] active:scale-[0.99]"
              >
                Add Car
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default AddCarPage;