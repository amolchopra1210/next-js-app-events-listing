import { getFeaturedEvents } from "../dummy-data";
import EventList from "../components/events/event-list";

export default function HomePage() {
  const FeaturedEvents = getFeaturedEvents();
  return (
    <div>
      <EventList items={FeaturedEvents} />
    </div>
  );
}
