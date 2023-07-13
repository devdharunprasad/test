import React from "react";
import useBlogFetch from "./useBlogFetch";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

const BlogsList = async () => {
  const supabase = createClientComponentClient();
  createClientComponentClient;
  const { data: forms, error } = await supabase.from("contact-form").select();
  console.log(forms);
  return (
    <div className="text-white">
      {/* add coment */}
      {forms?.map((form) => (
        <div key={form.id} className="mt-10 border">
          <h2>{form.name}</h2>
          <p>{form.message}</p>
        </div>
      ))}
    </div>
  );
};

export default BlogsList;
