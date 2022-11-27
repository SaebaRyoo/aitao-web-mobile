import React, { ReactElement, useEffect, useRef, useState } from 'react';
import BScroll from '@better-scroll/core';
import { BScrollConstructor } from '@better-scroll/core/dist/types/BScroll';
import ObserveDOM from '@better-scroll/observe-dom';
import ScrollBar from '@better-scroll/scroll-bar';
import PullDown from '@better-scroll/pull-down';
import Pullup from '@better-scroll/pull-up';
import MouseWheel from '@better-scroll/mouse-wheel';
import styles from './index.module.less';

export interface ScrollProps {
  wrapClassName?: string;
  contentClassName?: string;
  onPullup?: () => void;
  onPulldown?: () => void;
  children: ReactElement;
}

const ARROW_BOTTOM = (
  <svg width="16" height="16" viewBox="0 0 512 512">
    <path
      fill="currentColor"
      d="M367.997 338.75l-95.998 95.997V17.503h-32v417.242l-95.996-95.995l-22.627 22.627L256 496l134.624-134.623l-22.627-22.627z"
    ></path>
  </svg>
);
const ARROW_UP = (
  <svg width="16" height="16" viewBox="0 0 512 512">
    <path
      fill="currentColor"
      d="M390.624 150.625L256 16L121.376 150.625l22.628 22.627l95.997-95.998v417.982h32V77.257l95.995 95.995l22.628-22.627z"
    ></path>
  </svg>
);

// pulldownRefresh state
const PHASE = {
  moving: {
    enter: 'enter',
    leave: 'leave',
  },
  fetching: 'fetching',
  succeed: 'succeed',
  default: '',
};

type TEXTS_MAP_TYPE = {
  [key: string]: ReactElement;
};

const TEXTS_MAP: TEXTS_MAP_TYPE = {
  enter: <div>{ARROW_BOTTOM} 下拉刷新</div>,
  leave: <div>{ARROW_UP} 松开刷新</div>,
  fetching: <div>正在更新</div>,
  succeed: <div>刷新成功</div>,
};

const Scroll: React.FC<ScrollProps> = ({
  wrapClassName,
  contentClassName,
  onPullup,
  onPulldown,
  children,
}) => {
  //  外层的wrap实例
  const wrapRef = useRef<HTMLDivElement>(null);

  //  存储better-scroll的实例
  const [bs, setBs] = useState<BScrollConstructor>();
  const [tipText, setTipText] = useState<ReactElement | null>(null);

  //  better-scroll的配置参数
  const initBScroll = () => {
    BScroll.use(ObserveDOM);
    BScroll.use(MouseWheel);
    BScroll.use(ScrollBar);
    BScroll.use(PullDown);
    BScroll.use(Pullup);
    setBs(
      new BScroll(wrapRef.current as HTMLDivElement, {
        //probeType 为 3，任何时候都派发 scroll 事件，包括调用 scrollTo 或者触发 momentum 滚动动画
        probetype: 3,
        //  可以使用原生的点击
        click: true,
        //  检测dom变化
        observeDOM: true,
        mouseWheel: {
          speed: 20,
          invert: false,
          easeTime: 300,
        },
        //  显示滚动条
        scrollY: true,
        scrollbar: true,
        //  过度动画, 在下载更多的时候滚动条会有个过度动画
        useTransition: true,
        //  下拉刷新
        pullDownRefresh: {
          threshold: 80,
          stop: 0,
        },
        //  上拉加载更多
        pullUpLoad: {
          threshold: 40,
          stop: 10,
        },
      })
    );
  };

  //  对象初始化
  useEffect(() => {
    initBScroll();
    return () => {
      //  组件卸载时记得将其销毁
      bs?.destroy();
    };
  }, []);

  //  对象事件挂载
  useEffect(() => {
    bs?.on('pullingDown', pulldown);
    bs?.on('pullingUp', pullup);
    // v2.4.0 supported
    bs?.on('enterThreshold', () => {
      setTipText(TEXTS_MAP[PHASE.moving.enter]);
    });
    bs?.on('leaveThreshold', () => {
      setTipText(TEXTS_MAP[PHASE.moving.leave]);
    });

    return () => {
      bs?.off('pullingDown');
      bs?.off('pullingUp');
      bs?.off('enterThreshold');
      bs?.off('leaveThreshold');
    };
  }, [bs]);

  //  下拉刷新
  const pulldown = async () => {
    setTipText(TEXTS_MAP[PHASE.fetching]);
    onPulldown && (await onPulldown());
    setTipText(TEXTS_MAP[PHASE.succeed]);
    //  记得使用finishPullDown，不然你只能下拉一次
    bs?.finishPullDown();
    //  下拉之后你的content会发生变化，如果不使用refresh，你需要滑动一下才能刷新content的高度
    bs?.refresh();
  };

  //  上拉加载
  const pullup = async () => {
    onPullup && (await onPullup());
    bs?.finishPullUp();
    bs?.refresh();
  };

  return (
    <div
      className={
        wrapClassName ? wrapClassName : styles['aitao-component-scroll-wrap']
      }
      ref={wrapRef}
      style={{ overflow: 'hidden' }}
    >
      <div
        className={
          contentClassName
            ? contentClassName
            : styles['aitao-component-scroll-content']
        }
      >
        <div className={styles['aitao-component-scroll-pullDownWrapper']}>
          {tipText}
        </div>
        {children}
      </div>
    </div>
  );
};

export default Scroll;
