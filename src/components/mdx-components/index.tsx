
export const components = {

  h1: (props: any) => (
    <h2
      className="relative mt-3 border-t-2 border-rose-200/5 pt-9 text-xl font-medium text-rose-100/90 sm:text-3xl"
      {...props}
    />
  ),
  h2: (props: any) => (
    <h3
      className="relative mt-3 border-t-2 border-rose-200/5 pt-9 text-xl font-medium text-rose-100/90 sm:text-2xl"
      {...props}
    />
  ),
  h3: (props: any) => (
    <h4 className="text-xl font-medium text-rose-100/90" {...props} />
  ),
  h4: (props: any) => (
    <h5 className="text-lg font-medium text-rose-100/90" {...props} />
  ),
  hr: (props: any) => (
    <hr
      className="relative border-t-2 border-rose-200/5 pt-9 sm:pt-10"
      {...props}
    />
  ),
  ul: (props: any) => (
    <ul
      className="space-y-3 [li>&]:mt-3 [&>li]:relative [&>li]:pl-7 before:[&>li]:absolute before:[&>li]:left-1 before:[&>li]:top-3 before:[&>li]:h-1.5 before:[&>li]:w-1.5 before:[&>li]:rounded-full before:[&>li]:bg-rose-100/20"
      {...props}
    />
  ),
  ol: (props: any) => (
    <ol className="list-decimal space-y-3 pl-10" {...props} />
  ),
  strong: (props: any) => <strong className="font-semibold" {...props} />,
  blockquote: (props: any) => (
    <blockquote
      className="border-l-2 border-rose-200/10 pl-4 text-xl italic xl:!col-start-2 xl:!col-end-3"
      {...props}
    />
  ),
  del: (props: any) => (
    <del className="text-rose-100/70 line-through" {...props} />
  ),
}
