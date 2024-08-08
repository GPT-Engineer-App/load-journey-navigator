import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { RefreshCw } from "lucide-react";

const CatFacts = () => {
  const [fact, setFact] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const fetchCatFact = async () => {
    setIsLoading(true);
    try {
      const response = await fetch("https://catfact.ninja/fact");
      const data = await response.json();
      setFact(data.fact);
    } catch (error) {
      console.error("Error fetching cat fact:", error);
      setFact("Oops! Couldn't fetch a cat fact right now. Try again later!");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchCatFact();
  }, []);

  return (
    <Card className="bg-white shadow-lg rounded-lg overflow-hidden">
      <CardContent className="p-6">
        <motion.p
          key={fact}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-lg mb-4 min-h-[80px]"
        >
          {fact}
        </motion.p>
        <Button
          onClick={fetchCatFact}
          className="bg-purple-600 hover:bg-purple-700 text-white"
          disabled={isLoading}
        >
          {isLoading ? (
            <RefreshCw className="mr-2 h-4 w-4 animate-spin" />
          ) : (
            <RefreshCw className="mr-2 h-4 w-4" />
          )}
          New Fact
        </Button>
      </CardContent>
    </Card>
  );
};

export default CatFacts;
