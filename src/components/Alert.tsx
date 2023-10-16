"use client"

import { AlertDialog, Button as ButtonRadix, Flex } from "@radix-ui/themes";
import { IoTrashSharp } from "react-icons/io5";

export default function Alert() {
    return (
        <AlertDialog.Root>
        <AlertDialog.Trigger>
          <ButtonRadix><IoTrashSharp /></ButtonRadix>
        </AlertDialog.Trigger>
        <AlertDialog.Content style={{ maxWidth: 450 }}>
          <AlertDialog.Title>Deseja Realmente deletar?</AlertDialog.Title>

          <Flex gap="3" mt="4" justify="end">
            <AlertDialog.Cancel>
              <ButtonRadix variant="soft" color="gray">
                Cancelar
              </ButtonRadix>
            </AlertDialog.Cancel>
            <AlertDialog.Action>
              <ButtonRadix variant="solid" color="red">
                Deletar
              </ButtonRadix>
            </AlertDialog.Action>
          </Flex>
        </AlertDialog.Content>
      </AlertDialog.Root>
    )
}