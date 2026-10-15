import React, { createContext, useContext, useState, useCallback } from "react";
import { EmailChooserDialog } from "@/components/common/EmailChooserDialog";

interface EmailModalContextType {
  openEmailModal: (subject?: string) => void;
  closeEmailModal: () => void;
  isOpen: boolean;
}

const EmailModalContext = createContext<EmailModalContextType>({
  openEmailModal: () => {},
  closeEmailModal: () => {},
  isOpen: false,
});

export const useEmailModal = () => useContext(EmailModalContext);

export const EmailModalProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [subject, setSubject] = useState<string | undefined>();

  const openEmailModal = useCallback((customSubject?: string) => {
    setSubject(customSubject);
    setIsOpen(true);
  }, []);

  const closeEmailModal = useCallback(() => {
    setIsOpen(false);
  }, []);

  return (
    <EmailModalContext.Provider
      value={{ openEmailModal, closeEmailModal, isOpen }}
    >
      {children}
      <EmailChooserDialog
        open={isOpen}
        onOpenChange={setIsOpen}
        defaultSubject={subject}
      />
    </EmailModalContext.Provider>
  );
};
