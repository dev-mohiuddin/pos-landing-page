import React from "react";
import { TabsContent } from "../ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Separator } from "../ui/separator";

function AntiSlaveryTabs() {
  return (
    <TabsContent value="anti-slavery">
      <Card className="shadow-lg max-w-4xl mx-auto bg-transparent border-0">
        <CardHeader>
          <CardTitle className="text-3xl font-bold ">
            Anti-Slavery Statement
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-muted-foreground text-sm leading-relaxed">
          <p>
            Amaanah does not condone or tolerate any involvement of modern
            slavery in our company or supply chain. As a small team using
            UK-based suppliers, we assess our risk of modern slavery to be
            minimal.
          </p>
          <Separator />
          <p>
            Nonetheless, we remain vigilant and committed to ensuring that no
            form of modern slavery or human trafficking exists within our
            operations or supply chain. We will continue to strive to eradicate
            any such individuals or institutions that subject workers to modern
            slavery and uphold these values as we grow.
          </p>
        </CardContent>
      </Card>
    </TabsContent>
  );
}

export default AntiSlaveryTabs;
