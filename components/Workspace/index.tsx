"use client";

import { ArrowRight, MapPin } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

type WorkspaceFormValues = {
  name: string;
  url: string;
  region: string;
};

const appDomain = "chatflow.app/";

const normalizeSlug = (value: string) =>
  value
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9-]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 63);

const Workspace = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<WorkspaceFormValues>({
    defaultValues: {
      name: "",
      url: "",
      region: "us-east-1",
    },
  });

  const [urlDraft, setUrlDraft] = useState("");
  const currentUrl = normalizeSlug(urlDraft);
  const workspaceUrl = currentUrl
    ? `https://${appDomain}${currentUrl}`
    : `https://${appDomain}`;

  const onSubmit = (formData: WorkspaceFormValues) => {
    const normalizedSlug = normalizeSlug(formData.url);
    console.log({
      ...formData,
      slug: normalizedSlug,
    });
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-page px-4 text-ink">
      <div className="w-full max-w-xl rounded-2xl border border-line-soft bg-surface p-8 shadow-lg">
        <div className="mb-8">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.14em] text-brand-muted">
            CREATE YOUR WORKSPACE
          </p>
          <h1 className="text-3xl font-semibold tracking-tight text-ink">
            Set up your team
          </h1>
          <p className="mt-2 text-sm text-copy-muted">
            Create a workspace with a memorable name, a unique URL, and your
            region.
          </p>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-5"
          noValidate
        >
          <div className="space-y-2">
            <Label
              htmlFor="workspace-name"
              className="text-[13px] font-semibold text-copy-strong"
            >
              Name
            </Label>
            <Input
              id="workspace-name"
              type="text"
              placeholder="Acme Studio"
              autoComplete="organization"
              aria-invalid={Boolean(errors.name)}
              className="h-11 rounded-lg border-field-border bg-field px-3.5 text-sm text-ink placeholder:text-field-placeholder focus-visible:border-brand-focus focus-visible:ring-brand-focus/20"
              {...register("name", { required: "Workspace name is required" })}
            />
            {errors.name && (
              <p className="text-xs font-medium text-destructive">
                {errors.name.message}
              </p>
            )}
          </div>

          <div className="space-y-2">
            <Label
              htmlFor="workspace-url"
              className="text-[13px] font-semibold text-copy-strong"
            >
              Workspace URL
            </Label>
            <div className="flex items-center overflow-hidden rounded-lg border border-field-border bg-field focus-within:border-brand-focus focus-within:ring-2 focus-within:ring-brand-focus/20">
              <span className="shrink-0 border-r border-field-border bg-field px-3 py-3 text-xs font-medium text-copy-muted">
                {appDomain}
              </span>
              <Input
                id="workspace-url"
                type="text"
                placeholder="acme"
                aria-invalid={Boolean(errors.url)}
                className="h-11 rounded-none border-0 bg-transparent px-3.5 text-sm text-ink placeholder:text-field-placeholder focus-visible:ring-0"
                {...register("url", {
                  required: "A unique workspace slug is required",
                  validate: (value) => {
                    const sanitized = normalizeSlug(value);
                    return (
                      sanitized.length > 0 ||
                      "A unique workspace slug is required"
                    );
                  },
                  setValueAs: (value) => normalizeSlug(value),
                  onChange: (event) => setUrlDraft(event.target.value),
                })}
              />
            </div>
            <p className="text-xs text-copy-muted">
              Your workspace will be available at
              <span className="ml-1 font-medium text-ink">{workspaceUrl}</span>
            </p>
            {errors.url && (
              <p className="text-xs font-medium text-destructive">
                {errors.url.message}
              </p>
            )}
          </div>

          <div className="space-y-2">
            <Label
              htmlFor="workspace-region"
              className="text-[13px] font-semibold text-copy-strong"
            >
              Region
            </Label>
            <div className="relative">
              <MapPin
                size={16}
                className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-icon-muted"
              />
              <select
                id="workspace-region"
                aria-invalid={Boolean(errors.region)}
                className="h-11 w-full appearance-none rounded-lg border border-field-border bg-field pl-10 pr-3.5 text-sm text-ink outline-none transition focus:border-brand-focus focus:ring-2 focus:ring-brand-focus/20"
                {...register("region", { required: "Region is required" })}
              >
                <option value="us-east-1">US East</option>
                <option value="us-west-2">US West</option>
                <option value="eu-west-1">Europe</option>
                <option value="ap-southeast-1">Asia Pacific</option>
              </select>
            </div>
            {errors.region && (
              <p className="text-xs font-medium text-destructive">
                {errors.region.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            className="group inline-flex h-11 w-full items-center justify-center gap-2 rounded-lg bg-brand px-4 text-sm font-semibold text-brand-on transition-colors hover:bg-brand-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-focus"
          >
            Create workspace
            <ArrowRight
              size={16}
              className="transition-transform group-hover:translate-x-0.5"
            />
          </button>
        </form>
      </div>
    </div>
  );
};

export default Workspace;
