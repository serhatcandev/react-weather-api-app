import React from "react";

const City = ({ city }) => {
	return city ? (
		<div className="flex flex-col justify-center text-center">
			<p className="text-3xl m-2">
				Şehir: {city.name} | {city.sys.country}
			</p>
			<p className="text-3xl m-2">{Math.floor(city.main.temp)}°C Derece</p>
			<p className="text-2xl m-2">
				Hissedilen {Math.floor(city.main.feels_like)}°C Derece
			</p>
		</div>
	) : null;
};

export default City;
