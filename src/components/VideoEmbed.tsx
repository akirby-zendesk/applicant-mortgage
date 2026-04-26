interface VideoEmbedProps {
  videoId: string;
  title?: string;
}

export function VideoEmbed({ videoId, title = "Video" }: VideoEmbedProps) {
  return (
    <div className="bg-navy-deep rounded-2xl p-4 lg:p-6 max-w-[800px] mx-auto">
      <div className="relative w-full pt-[56.25%] rounded-xl overflow-hidden">
        <iframe
          className="absolute inset-0 w-full h-full"
          src={`https://www.youtube-nocookie.com/embed/${videoId}`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </div>
  );
}
