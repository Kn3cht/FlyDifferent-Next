import PageSection from "@/components/layout/PageSection";

export default function MarkdownSection({ content }: { content: string }) {
  return (
    <PageSection>
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </PageSection>
  );
}
