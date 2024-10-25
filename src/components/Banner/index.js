import { useEffect, useState, useRef } from "react";
import { Image, StyleSheet, View } from "react-native";
import PagerView from "react-native-pager-view";

export function Banner() {
    const [page, setPage] = useState(0);
    const pagerRef = useRef(null);
    const totalPages = 5; // Total de páginas

    const onPageSelected = (e) => {
        setPage(e.nativeEvent.position);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            setPage((prevPage) => {
                const nextPage = (prevPage + 1) % totalPages;
                pagerRef.current.setPage(nextPage); // Muda a página programaticamente
                return nextPage;
            });
        }, 30000); // Troca a cada 3 segundos

        return () => clearInterval(interval); // Limpa o intervalo ao desmontar
    }, []);

    useEffect(() => {
        if (pagerRef.current) {
            pagerRef.current.setPage(page); // Atualiza a página quando o estado muda
        }
    }, [page]);

    return (
        <View style={styles.container}>
            <PagerView
                ref={pagerRef}
                initialPage={0}
                style={styles.content}
                onPageSelected={onPageSelected}
                scrollEnabled={true} // Habilita a rolagem manual
            >
                <View key="1" style={styles.page}>
                    <Image source={require('../../assets/banner6.png')} style={styles.banner} />
                </View>
                <View key="2" style={styles.page}>
                    <Image source={require('../../assets/banner1.png')} style={styles.banner} />
                </View>
                <View key="3" style={styles.page}>
                    <Image source={require('../../assets/banner2.png')} style={styles.banner} />
                </View>
                <View key="4" style={styles.page}>
                    <Image source={require('../../assets/banner3.png')} style={styles.banner} />
                </View>
                <View key="5" style={styles.page}>
                    <Image source={require('../../assets/banner4.png')} style={styles.banner} />
                </View>
            </PagerView>
            <View style={styles.bulletContent}>
                {[...Array(totalPages)].map((_, index) => (
                    <View key={index} style={[styles.bullet, page === index && styles.activeBullet]}></View>
                ))}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    content: {
        marginTop: 10,
        height: 200,
        alignItems: "center",
        width: 409,
    },
    page: {
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff",
        padding: 10,
    },
    bulletContent: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
    bullet: {
        width: 10,
        height: 10,
        borderRadius: 5,
        backgroundColor: "#7052ff",
        margin: 10,
    },
    activeBullet: {
        backgroundColor: "#d06aff",
    },
    banner: {
        width: "100%",
        height: 200,
    },
});
