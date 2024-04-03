interface country {
  name: {
    common: string;
  };
}

interface geoLocation {
  country_name: string;
}

export const fetchCountry = async () => {
  try {
    const response = await fetch("https://restcountries.com/v3.1/all");
    const data = (await response.json()) as country[];
    return data;
  } catch (error) {
    if (error instanceof Error) {
      throw error;
    } else {
      throw new Error("An unknown error occurred.");
    }
  }
};

export const getLocation = async () => {
  const response = await fetch("https://ipapi.co/json/");
  const data = (await response.json()) as geoLocation;
  return data.country_name;
};
