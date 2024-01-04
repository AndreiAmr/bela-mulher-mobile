import { ChevronRightIcon } from '@assets/svg/ChevronRight';
import { GraphIcon } from '@assets/svg/Graph';
import { MoneyIcon } from '@assets/svg/Money';
import { PlusIcon } from '@assets/svg/Plus';
import { ButtonIcon } from '@atoms/ButtonIcon';
import { CurrentProcedure } from '@atoms/CurrentProcedure';
import { VStack } from '@gluestack-ui/themed';

export const HomeActions = () => {
  return (
    <VStack paddingHorizontal={20}>
      <VStack
        backgroundColor='$green800'
        marginTop={50}
        padding={18}
        borderRadius={10}
        gap={14}
        marginBottom={38}
      >
        <ButtonIcon
          label='Cadastrar Novo procedimento'
          onPress={() => {}}
          iconLeft={<PlusIcon />}
          iconRight={<ChevronRightIcon />}
        />
        <ButtonIcon
          label='Cadastrar Novo Pacote'
          onPress={() => {}}
          iconLeft={<PlusIcon />}
          iconRight={<ChevronRightIcon />}
        />
      </VStack>

      <CurrentProcedure />

      <VStack gap={15} marginTop={38}>
        <ButtonIcon
          label='Ver estimativas para hoje'
          onPress={() => {}}
          iconLeft={<MoneyIcon />}
          iconRight={<ChevronRightIcon dark />}
          ligthBackground
        />
        <ButtonIcon
          label='Ver comparativos do mês'
          onPress={() => {}}
          iconLeft={<GraphIcon />}
          iconRight={<ChevronRightIcon dark />}
          ligthBackground
        />
      </VStack>
    </VStack>
  );
};
