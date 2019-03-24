import React, { Component } from "react";
export default class Table extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {}
  render() {
    return (
      <div className="border-container">
        <div className="name-title">基因数据表格</div>
        <table className="table table-kingdargen">
          <thead>
            <tr style={{ lineHeight: 3 }}>
              <th>数据变量</th>
              <th>儿童</th>
              <th>青年</th>
              <th>老年</th>
              {/* <th>test5</th> */}
            </tr>
          </thead>
          <tbody>
            <tr style={{ lineHeight: 3 }}>
              <td>高血压患病风险</td>
              <td>234</td>
              <td>342</td>
              <td>43</td>
              {/* <td>23</td> */}
            </tr>
            <tr style={{ lineHeight: 3 }}>
              <td>Na元素通道耐受度</td>
              <td>56</td>
              <td>34</td>
              <td>56</td>
              {/* <td>252</td> */}
            </tr>
            <tr style={{ lineHeight: 3 }}>
              <td>Ca元素通道耐受度</td>
              <td>34</td>
              <td>46</td>
              <td>789</td>
              {/* <td>234</td> */}
            </tr>
            <tr style={{ lineHeight: 3 }}>
              <td>RASI拮抗剂耐受度</td>
              <td>54</td>
              <td>456</td>
              <td>75</td>
              {/* <td>34</td> */}
            </tr>
            <tr style={{ lineHeight: 3 }}>
              <td>α、β受体加权含量</td>
              <td>234</td>
              <td>456</td>
              <td>43</td>
              {/* <td>32</td> */}
            </tr>
            <tr style={{ lineHeight: 3 }}>
              <td>代谢水平</td>
              <td>368</td>
              <td>36</td>
              <td>53</td>
              {/* <td>567</td> */}
            </tr>
            {/* <tr>
              <td>g</td>
              <td>35</td>
              <td>356</td>
              <td>24</td>
              <td>768</td>
            </tr>
            <tr>
              <td>h</td>
              <td>456</td>
              <td>23</td>
              <td>3</td>
              <td>235</td>
            </tr>
            <tr>
              <td>i</td>
              <td>573</td>
              <td>35</td>
              <td>54</td>
              <td>543</td>
            </tr>
            <tr>
              <td>k</td>
              <td>465</td>
              <td>324</td>
              <td>567</td>
              <td>34</td>
            </tr>
            <tr>
              <td>k</td>
              <td>5</td>
              <td>23</td>
              <td>567</td>
              <td>34</td>
            </tr>
            <tr>
              <td>k</td>
              <td>879</td>
              <td>45</td>
              <td>3</td>
              <td>36</td>
            </tr>
            <tr>
              <td>k</td>
              <td>67</td>
              <td>5</td>
              <td>34</td>
              <td>256</td>
            </tr> */}
          </tbody>
        </table>
        <span className="top-left border-span" />
        <span className="top-right border-span" />
        <span className="bottom-left border-span" />
        <span className="bottom-right border-span" />
      </div>
    );
  }
}
