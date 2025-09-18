"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import PrivacyTabs from "@/components/common/privacy-policy-tabs";
import TermsTabs from "@/components/common/terms-conditions-tabs";
import AntiSlaveryTabs from "@/components/common/AntiSlaveryTabs";
import LicenseTerms from "@/components/common/LicenseTerms";
import { useSearchParams } from "next/navigation";

import { tac } from "@/assets";
import Image from "next/image";

export default function PrivacyPolicy() {

    const searchParams = useSearchParams();
  const tabs = searchParams.get("tabs");
  return (
    <section className="max-w-4xl mx-auto px-8 pt-2">
      <div className="mb-5">
        {/* <Image src={tac} alt="TAC" /> */}
        <h2 className="text-accent-foreground font-black text-5xl p-4">Legal</h2>
      </div>
      <Tabs defaultValue={tabs || "Privacy-Policy"} className="">
        <TabsList className={`flex items-center gap-3`}>
          <TabsTrigger value="Privacy-Policy">Privacy Policy</TabsTrigger>
          <TabsTrigger value="terms-and-conditions">Terms and Conditions</TabsTrigger>
          <TabsTrigger value="anti-slavery-statement">
            Anti- Slavery Statement
          </TabsTrigger>
          <TabsTrigger value="license-terms">Software License Terms of Use</TabsTrigger>
        </TabsList>
        <PrivacyTabs />
        <TermsTabs />
        <AntiSlaveryTabs />
        <LicenseTerms />
      </Tabs>
    </section>
  );
}
