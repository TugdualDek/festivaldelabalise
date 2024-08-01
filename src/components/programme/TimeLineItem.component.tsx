interface TimelineItemProps {
  date: {
    day: string;
    date: string;
  };
  content: string[];
}

const TimelineItem = ({ date, content }: TimelineItemProps) => {
  return (
    <div className="flex mb-8">
      <div className="w-1/4 mr-2 text-center">
        <span className="font-bold block">{date.day}</span>
        <span className="font-bold block">{date.date}</span>
      </div>
      <div className="w-3/4 pl-4 border-l-4 border-[var(--color-red)] ">
        {content.map((line, index) => (
          <p key={index} className="mb-2">
            {line}
          </p>
        ))}
      </div>
    </div>
  );
};

export default TimelineItem;
