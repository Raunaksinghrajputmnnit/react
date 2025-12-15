import { useEffect, useState } from "react";

function useCurrencyInfo(base) {
  const [data, setData] = useState({});

  useEffect(() => {
    fetch(`https://latest.currency-api.pages.dev/v1/currencies/${base}.json`)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then((json) => {
        setData(json[base]); // ✅ THIS IS THE KEY
      })
      .catch((err) => {
        console.error("API error:", err);
        setData({});
      });
  }, [base]);

  return data;
}

export default useCurrencyInfo;
