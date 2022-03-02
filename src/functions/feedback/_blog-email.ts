import type { Response } from "@netlify/functions/src/function/response";
import saveFeedbackInSheet from "./_save-to-spreadsheet";

interface Feedback {
  email: string;
  url: string;
}

export const submitFeedback = async (body: string): Promise<Response> => {
  const feedback: Feedback = JSON.parse(body) as Feedback;
  const isSavedInSheet = await saveFeedbackInSheet({
    sheetTitle: "Blog-Email - Submitted",
    data: [new Date(), feedback.url, feedback.email],
  });

  const statusCode = isSavedInSheet ? 201 : 500;
  return {
    statusCode,
    body: statusCode === 201 ? "Feedback added" : "Oh no, something failed.",
  };
};
