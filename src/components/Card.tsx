interface CardProps {
  title: string;
  icon_url: string;
  category: string;
  link: string;
  description?: string; 
  tag: string;
  id: string | number; 
}

const Card = ({ title, icon_url, category, link, description}: CardProps) => {
  return (
    <article className="flex overflow-hidden flex-col">
      <div className="flex flex-col items-start pt-6 px-6 w-full max-md:px-5">
        <div className="flex gap-4">
          <img
            loading="lazy"
            src={icon_url}
            alt={`${title} logo`}
            className="object-contain shrink-0 w-11 aspect-square"
          />
          <div className="flex flex-col">
            <h3 className="text-base font-medium text-indigo-950">{title}</h3>
            <span className="self-start mt-1 text-xs leading-none text-gray-500">{category}</span>
          </div>
        </div>
        <a href={link} target="_blank" rel="noopener noreferrer" className="mt-5 text-sm leading-6 text-blue-600">
          {link}
        </a>
        {description && (
          <p className="mt-2 text-sm leading-6 text-gray-500">{description}</p>
        )}
      </div>
    </article>
  );
};

export default Card;
