import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const CatFacts = () => {
  const [fact, setFact] = useState("");

  const fetchCatFact = async () => {
    try {
      const response = await fetch("https://catfact.ninja/fact");
      const data = await response.json();
      setFact(data.fact);
    } catch (error) {
      console.error("Error fetching cat fact:", error);
      setFact("Oops! Couldn't fetch a cat fact right now. Try again later!");
    }
  };

  useEffect(() => {
    fetchCatFact();
  }, []);

  return (
    <Card className="bg-white shadow-lg rounded-lg overflow-hidden">
      <CardContent className="p-6">
        <p className="text-lg mb-4">{fact}</p>
        <Button onClick={fetchCatFact} className="bg-purple-600 hover:bg-purple-700 text-white">
          New Fact
        </Button>
      </CardContent>
    </Card>
  );
};

export default CatFacts;
