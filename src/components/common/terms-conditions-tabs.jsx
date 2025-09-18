import React from "react";
import { TabsContent } from "../ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Separator } from "../ui/separator";

function TermsTabs() {
  return (
    <TabsContent value="terms-and-conditions">
      <Card className="shadow-lg max-w-4xl mx-auto bg-transparent border-0">
        <CardHeader>
          <CardTitle className="text-3xl font-bold">
            Terms and Conditions
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6 text-sm leading-relaxed text-muted-foreground">
          <p>
            The following Terms & Conditions pertain to your use of
            <a
              className="underline text-yellow-500"
              href="www.amaanahepos.co.uk"
            >
              {" "}
              www.amaanahepos.co.uk
            </a>{" "}
            and the services provided thereof. Your use of this site indicates
            your agreement to these terms and that you will conduct yourself
            appropriately. These terms do not affect any other contract with us
            and is open to occasional revision. All revisions we make to our
            Terms & Conditions will be posted on this website and emailed to you
            when necessary.
          </p>

          <Separator />

          <h3 className="font-semibold text-xl">Access</h3>
          <p>
            You do not need to be identified or provide your details to browse
            this site. However, some areas and all paid services will be
            restricted to registered users. We are not liable to any
            repercussions should this site be unavailable at any point of time.
          </p>

          <Separator />

          <h3 className="font-semibold text-xl">Security</h3>
          <p>
            We are liable to taking security measures to protect your details on
            our systems, however, your passwords, user identification codes etc.
            are your responsibility. Such details should not be disclosed to
            third-parties. We also reserve the right to disable your registered
            account in cases of misuse and failing to comply with the terms laid
            out in this document.
          </p>

          <Separator />

          <h3 className="font-semibold text-xl">Data Use</h3>
          <p>
            Your use of this site warrants the collection of your data for
            legitimate purposes in a manner that is legally binding. You can
            read our privacy policy here.
          </p>

          <Separator />

          <h3 className="font-semibold text-xl">Site Information</h3>
          <p>
            The site, its content and our services will undergo occasional
            revision. Any information displayed at any time has the possibility
            of being outdated or inaccurate. There is no guarantee to the
            information provided and we are not required to correct our site.
          </p>

          <Separator />

          <h3 className="font-semibold text-xl">Affiliate Links</h3>
          <p>
            Any links provided are for your aid and convenience. We bear no
            responsibility for the actions or information displayed on these
            third-party sites, or any damages that may occur thereof.
          </p>

          <Separator />

          <h3 className="font-semibold text-xl">Prohibitions</h3>
          <p>
            You must not use the site for anything that is not explicitly made
            available to you as the user, or reuse, resell or reproduce the
            materials within it.
          </p>

          <Separator />

          <h3 className="font-semibold text-xl">Malware</h3>
          <p>
            You must not willingly introduce any malware (viruses, hacking links
            and various cyberattacks) onto our site or attempt in any way to
            interfere with our networks, databases or any webpages within our
            domain. This is recognised as a criminal offence within the Computer
            Misuse Act 1990.
          </p>

          <Separator />

          <h3 className="font-semibold text-xl">
            Rights to Intellectual Property
          </h3>
          <p>
            The contents of this site are copyrighted as our Intellectual
            Property, and you may not duplicate these materials for public or
            for-profit use. You must not take any text or graphics out of their
            context, and you must not modify said material. However, you may
            download or print off materials for your personal convenience.
          </p>

          <Separator />

          <h3 className="font-semibold text-xl">Repercussions</h3>
          <p>
            On breach of these terms and conditions, we are entitled to
            immediate action, temporary or permanent. We may:
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Withdraw your access to the site</li>
            <li>Disable your account</li>
            <li>Legally press charges for any damages or losses incurred</li>
            <li>Disclose any information necessary to the law enforcement</li>
          </ul>

          <Separator />

          <h3 className="font-semibold text-xl">Our Responsibilities</h3>
          <p>
            We are not liable for any damages faced by yourself that are
            consequential or inconsequential to your use of the site and the
            information displayed on it, including the loss of actual or
            anticipated income or savings. This is regardless of occurrence,
            foreseen or unforeseen, due to negligence or breach of contract.
          </p>
          <p>However, we are fully liable for:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>any physical harm or fatalities caused by our incompetence;</li>
            <li>
              any fraud or fraudulent misrepresentation committed through our
              site
            </li>
            <li>
              any liabilities that cannot be excluded in accordance with the
              appropriate legislation.
            </li>
          </ul>

          <Separator />

          <h3 className="font-semibold text-xl">Legality</h3>
          <p>
            These terms and conditions are outlined in accordance with the
            legislation in England and Wales, and the data security laws of the
            European Economic Area. The appropriate governing bodies of England
            and Wales are to oversee any disputes to arise from the conditions
            or breaches of this contract.
          </p>

          <p>We thank you for your cooperation.</p>
        </CardContent>
      </Card>
    </TabsContent>
  );
}

export default TermsTabs;
