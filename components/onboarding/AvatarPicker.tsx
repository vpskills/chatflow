import { useState, type ChangeEvent } from "react";
import { ImagePlus, Upload, X } from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

const maxAvatarSize = 5 * 1024 * 1024;

type AvatarPickerProps = {
  name: string;
  avatarUrl: string | null;
  onSelectImage: (file: File) => void;
  onRemoveImage: () => void;
  onClose: () => void;
};

export default function AvatarPicker({
  name,
  avatarUrl,
  onSelectImage,
  onRemoveImage,
  onClose,
}: AvatarPickerProps) {
  const [error, setError] = useState("");

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.currentTarget.files?.[0];
    if (!file) return;

    if (!file.type.startsWith("image/")) {
      setError("Choose an image file.");
    } else if (file.size > maxAvatarSize) {
      setError("Choose an image smaller than 5 MB.");
    } else {
      setError("");
      onSelectImage(file);
    }

    event.currentTarget.value = "";
  };

  return (
    <div
      className="fixed inset-0 z-20 grid place-items-center bg-onboarding-backdrop p-4"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <section
        role="dialog"
        aria-modal="true"
        aria-labelledby="avatar-title"
        className="w-full max-w-[390px] rounded-xl border border-onboarding-rule/10 bg-onboarding-dialog p-5 shadow-2xl sm:p-6"
      >
        <div className="flex items-center justify-between">
          <div>
            <h2 id="avatar-title" className="text-base font-semibold">
              Profile photo
            </h2>
            <p className="mt-1 text-xs text-onboarding-copy-muted">
              Choose an image up to 5 MB.
            </p>
          </div>
          <Button
            type="button"
            variant="ghost"
            size="icon"
            onClick={onClose}
            aria-label="Close profile photo picker"
            className="rounded-md text-onboarding-copy-link transition-colors hover:bg-onboarding-rule/7 hover:text-onboarding-foreground"
          >
            <X size={17} />
          </Button>
        </div>

        <div
          role={avatarUrl ? "img" : undefined}
          aria-label={
            avatarUrl ? `${name || "Profile"} photo preview` : undefined
          }
          className="relative mx-auto my-7 grid size-40 place-items-center overflow-hidden rounded-full border border-onboarding-rule/10 bg-onboarding-preview bg-cover bg-center text-onboarding-photo"
          style={
            avatarUrl ? { backgroundImage: `url("${avatarUrl}")` } : undefined
          }
        >
          {!avatarUrl && <ImagePlus size={38} strokeWidth={1.4} />}
        </div>

        <Input
          id="avatar-file"
          type="file"
          accept="image/*"
          aria-describedby={error ? "avatar-file-error" : undefined}
          className="sr-only"
          onChange={handleFileChange}
        />
        <div className="flex justify-center">
          <Label
            htmlFor="avatar-file"
            className="inline-flex h-10 cursor-pointer items-center gap-2 rounded-lg bg-onboarding-accent-strong px-4 text-sm font-semibold text-onboarding-accent-foreground transition-colors hover:bg-onboarding-accent-hover"
          >
            <Upload size={15} />
            {avatarUrl ? "Choose another image" : "Choose image"}
          </Label>
        </div>
        {error && (
          <p
            id="avatar-file-error"
            role="alert"
            className="mt-3 text-center text-xs text-onboarding-error"
          >
            {error}
          </p>
        )}

        <div className="mt-8 flex justify-between gap-2 border-t border-onboarding-rule/8 pt-4">
          {avatarUrl ? (
            <Button
              type="button"
              variant="ghost"
              onClick={() => {
                setError("");
                onRemoveImage();
              }}
              className="h-9 rounded-lg px-3 text-sm text-onboarding-copy transition-colors hover:bg-onboarding-rule/5"
            >
              Remove photo
            </Button>
          ) : (
            <span />
          )}
          <Button
            type="button"
            size="lg"
            onClick={onClose}
            className="h-9 rounded-lg bg-onboarding-accent-strong px-4 text-sm font-semibold text-onboarding-accent-foreground transition-colors hover:bg-onboarding-accent-hover"
          >
            Done
          </Button>
        </div>
      </section>
    </div>
  );
}
