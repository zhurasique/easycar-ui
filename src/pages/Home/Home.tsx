import React from "react";
import {Block, Flex, Layout, Searchbar} from "./Home.styled";
import {Button, Select} from "antd";
import {SearchOutlined} from '@ant-design/icons';
import {Ad, Advert} from "../../components";

export const Home = (props) => {

    document.title = props.title;

    return (
        <Layout>
            <Flex className={"padding-bottom"}>
                <Searchbar>
                    <Flex>
                        <Block>
                            <div>
                                <div>
                                    <p>Brand</p>
                                </div>
                                <div>
                                    <Select
                                        defaultValue={"-1"}
                                        options={[
                                            { value: "-1", label: "No matter"},
                                            { value: "1", label: "BMW"},
                                            { value: "2", label: "Mercedes-Benz"},
                                            { value: "3", label: "Audi"},
                                        ]}
                                    />
                                </div>
                            </div>
                            <div>
                                <div>
                                    <p>Price up to</p>
                                </div>
                                <div>
                                    <Select
                                        defaultValue={"-1"}
                                        options={[
                                            { value: "-1", label: "No matter"},
                                            { value: "1", label: "BMW"},
                                            { value: "2", label: "Mercedes-Benz"},
                                            { value: "3", label: "Audi"},
                                        ]}
                                    />
                                </div>
                            </div>
                            <div>
                                <div>
                                    <p>Location</p>
                                </div>
                                <div>
                                    <Select
                                        defaultValue={"-1"}
                                        options={[
                                            { value: "-1", label: "No matter"},
                                            { value: "1", label: "BMW"},
                                            { value: "2", label: "Mercedes-Benz"},
                                            { value: "3", label: "Audi"},
                                        ]}
                                    />
                                </div>
                            </div>
                        </Block>
                        <Block>
                            <div>
                                <div>
                                    <p>Model</p>
                                </div>
                                <div>
                                    <Select
                                        defaultValue={"-1"}
                                        options={[
                                            { value: "-1", label: "No matter"},
                                            { value: "1", label: "BMW"},
                                            { value: "2", label: "Mercedes-Benz"},
                                            { value: "3", label: "Audi"},
                                        ]}
                                    />
                                </div>
                            </div>
                            <div>
                                <div>
                                    <p>First registration</p>
                                </div>
                                <div>
                                    <Select
                                        defaultValue={"-1"}
                                        options={[
                                            { value: "-1", label: "No matter"},
                                            { value: "1", label: "BMW"},
                                            { value: "2", label: "Mercedes-Benz"},
                                            { value: "3", label: "Audi"},
                                        ]}
                                    />
                                </div>
                            </div>
                            <div>
                                <Button
                                    type={"primary"}
                                >
                                    <Flex>
                                        <SearchOutlined />
                                        <div>
                                            <p>Show results</p>
                                            <p>4332</p>
                                        </div>
                                    </Flex>
                                </Button>
                            </div>
                        </Block>
                    </Flex>
                </Searchbar>
                <Ad/>
            </Flex>
            <div>
                <Advert/>
                <Advert/>
                <Advert/>
                <Advert/>
                <Advert/>
                <Advert/>
                <Advert/>
                <Advert/>
            </div>
        </Layout>
    )
}

export default Home