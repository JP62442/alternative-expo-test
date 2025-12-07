import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL: string = process.env.NEXT_PUBLIC_SUPABASE_URL ?? "";
const SUPABASE_ANON_KEY: string =
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? "";

const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

interface WinnerRow {
  year: number;
  event_name: string;
  category_name: string;
  winner_name: string;
  image_url?: string;
  logo_url?: string;
  product_url?: string;
}

interface WinnerCategory {
  category_name: string;
  winner_name: string;
  image_url?: string;
  logo_url?: string;
  product_url?: string;
}

interface EventData {
  year: number;
  event_name: string;
  categories: WinnerCategory[];
}

interface UseWinnersReturn {
  winners: EventData[];
  loading: boolean;
  error: boolean;
}

function groupWinnersByEvent(data: WinnerRow[]): EventData[] {
  const groupedMap = new Map<string, EventData>();

  data.forEach((row) => {
    const key = `${row.year}-${row.event_name}`;

    if (!groupedMap.has(key)) {
      groupedMap.set(key, {
        year: row.year,
        event_name: row.event_name,
        categories: [],
      });
    }

    groupedMap.get(key)?.categories.push({
      category_name: row.category_name,
      winner_name: row.winner_name,
      image_url: row.image_url,
      logo_url: row.logo_url,
      product_url: row.product_url,
    });
  });

  return Array.from(groupedMap.values());
}

export function useWinners(): UseWinnersReturn {
  const [winners, setWinners] = useState<EventData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    async function fetchWinners() {
      try {
        setLoading(true);
        setError(false);

        if (!SUPABASE_URL || !SUPABASE_ANON_KEY) {
          setError(true);
          setLoading(false);
          return;
        }

        const { data, error: fetchError } = await supabase
          .from("winners")
          .select(
            "year, event_name, category_name, winner_name, image_url, logo_url, product_url"
          );

        if (fetchError) {
          setError(true);
          setWinners([]);
        } else if (data) {
          setWinners(groupWinnersByEvent(data));
          setError(false);
        } else {
          setWinners([]);
          setError(false);
        }
      } catch (err) {
        setError(true);
        setWinners([]);
      } finally {
        setLoading(false);
      }
    }

    fetchWinners();
  }, []);

  return { winners, loading, error };
}
