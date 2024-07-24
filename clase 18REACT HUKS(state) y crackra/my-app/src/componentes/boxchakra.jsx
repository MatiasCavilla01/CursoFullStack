import { Button, Box,Flex} from "@chakra-ui/react";
// las cajas de chakra se colocan como divs en el html y puede agregarse estilos de manera facil
// ejemplo p de paddin pt paddin top, ml marginleft ,m margin, as='h1' es un h1 ,fontweight,etc
const Cajas = ()=>{
    return(
        <> <Box as="section">
            <Flex alignItems="center" justifyContent="center">
            <Box as="h2" p="66px" m="12px" fontWeight="semibold">
                quiero ser un h2
            </Box>
            <Box as="p" pl="66px" mt="12px" fontWeight="bold">
                y yo un parrafo
            </Box>
            </Flex>
            </Box>
        </>
    )
}

export default Cajas;